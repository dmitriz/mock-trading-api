const { BINANCE_REST_URLs } = require('./conf')
const binance_signed = require('./binance-req-signed')
const show = console.log

const run_binance_signed = (endpt, query) =>
	binance_signed({
		url: BINANCE_REST_URLs[0] + endpt, 
		query
	})(show,show)

run_binance_signed('/api/v3/myTrades', {symbol: 'ONEBUSD', startTime: 1641654559415})

