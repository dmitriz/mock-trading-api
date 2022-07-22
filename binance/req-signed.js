const crypto = require('crypto')
const { pipeline, map } = require('cpsfy')
const show = console.log

const { BINANCE_API_KEY, BINANCE_API_SECRET, BINANCE_REST_URL } = require('../keys')
const headers = {'X-MBX-APIKEY': BINANCE_API_KEY}

const val2str = v => 'string' == typeof v ? v : JSON.stringify(v)
const obj2qs = q => Object.entries(q).map( ([k,v]) => k + '=' + val2str(v) ).join('&')

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

module.exports = req => obj =>	pipeline({...obj, headers})(binance_sign,req)
