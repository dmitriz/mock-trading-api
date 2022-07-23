const req = require('../req')

const { BINANCE_REST_URLs } = require('./conf')
const binance_signed = require('./req-signed')(req)
const show = console.log

const run_signed = (endpt, query, method) =>
	binance_signed({
		url: BINANCE_REST_URLs[0] + endpt, 
		query,
		method
	})(show,show)


// run_signed('/api/v3/account')

// run_signed('/api/v3/myTrades')	// illegal
// run_signed('/api/v3/myTrades', {symbol: 'ONEBUSD'})
// run_signed('/api/v3/myTrades', {symbol: 'ONEBUSD', startTime: 1641654559415})
// run_signed('/api/v3/myTrades', {symbol: 'ONEBUSD', startTime: 1641654559415, endTime: 1641654559419})

