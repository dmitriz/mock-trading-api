const { BINANCE_REST_URLs } = require('./conf')
const binance_headers = require('./binance-req-headers')
const show = console.log

const run_binance_headers = (endpt, query) =>
	binance_headers({
		url: BINANCE_REST_URLs[0] + endpt, 
		query
	})(show,show)

// run_binance_headers('/api/v3/historicalTrades')	// illegal
run_binance_headers('/api/v3/historicalTrades', {symbol: "ETHBTC"})
