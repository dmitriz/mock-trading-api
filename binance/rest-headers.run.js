const req = require('../req')

const { BINANCE_REST_URLs } = require('./conf')
const binance_headers = require('./binance-req-headers')(req)

const show = console.log

const run_binance_headers = (endpt, query) =>
	binance_headers({
		url: BINANCE_REST_URLs[0] + endpt, 
		query
	})(show,show)

// run_binance_headers('/api/v3/historicalTrades')	// illegal
// run_binance_headers('/api/v3/historicalTrades', {symbol: "ETHBTC"})
// run_binance_headers('/api/v3/historicalTrades', {symbol: "ETHBTC", limit: 1})
// run_binance_headers('/api/v3/historicalTrades', {symbol: "ETHBTC", limit: 1, fromId: 28457})
