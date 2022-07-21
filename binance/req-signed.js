const { BINANCE_API_KEY, BINANCE_API_SECRET, BINANCE_REST_URL } = require('../keys')
const headers = {'X-MBX-APIKEY': BINANCE_API_KEY}

const { pipeline, map } = require('cpsfy')
const crypto = require('crypto')
const axios = require('axios')

const unpromise = promise => promise.then.bind(promise)

const req = (...args) => pipeline(...args)(
	axios,
	unpromise,
	map(res => res.data)
)

const val2str = v => 'string' == typeof v ? v : JSON.stringify(v)
const obj2qs = q => Object.entries(q).map( ([k,v]) => k + '=' + val2str(v) ).join('&')

const show = console.log
const sign = (key, value) => crypto
	.createHmac('sha256', key)
	.update(obj2qs(value))
	.digest('hex')

module.exports = (endpt, query={}, method='GET') => {
	const timestamp = Date.now() - 1000
	const queryExt = {...query, timestamp}
	const signature = sign(BINANCE_API_SECRET, queryExt)
	return req(
		BINANCE_REST_URL + endpt + '?' + obj2qs({...queryExt, signature}), 
		{ method, headers }
	)
}
