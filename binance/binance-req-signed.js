const crypto = require('crypto')
const { pipeline, map } = require('cpsfy')
const axios = require('axios')
const show = console.log

const { BINANCE_API_KEY, BINANCE_API_SECRET, BINANCE_REST_URL } = require('../keys')
const headers = {'X-MBX-APIKEY': BINANCE_API_KEY}

const unpromise = promise => promise.then.bind(promise)
const val2str = v => 'string' == typeof v ? v : JSON.stringify(v)
const obj2qs = q => Object.entries(q).map( ([k,v]) => k + '=' + val2str(v) ).join('&')

const to_url = query => ('object' == typeof query) && (Object.keys(query).length > 0)
	? '?' + obj2qs(query) 
	: ''

const req = ({url, query, ...rest}) => pipeline({url: url + to_url(query), ...rest})(
	axios,
	unpromise,
	map(res => res.data)
)

const sign = (key, value) => crypto
	.createHmac('sha256', key)
	.update(obj2qs(value))
	.digest('hex')

const binance_sign = ({query, ...rest}) => {
	const timestamp = Date.now() - 1000
	const queryExt = {...query, timestamp}
	const signature = sign(BINANCE_API_SECRET, queryExt)
	return {query: {...queryExt, signature}, ...rest}
}

module.exports = obj =>	pipeline({headers, ...obj})(binance_sign,req)
