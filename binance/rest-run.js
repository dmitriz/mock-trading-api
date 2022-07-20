const req = require('../req')

const { pipeline, map } = require('cpsfy')
const { base_urls } = require('./conf')
const show = console.log

// use the 1st base url
const run = ep => req({ url: base_urls[0] + ep })(show, show)

const run_query = (ep, query) => req({ url: base_urls[0] + ep, query })(show, show)

// iterate over all base_urls
const run_mult = ep => base_urls.map(url =>
	pipeline({ url: url + ep })(
		req,
		// map(res => res.data)
	)(show, show)
)

// run_mult('/api/v1/ping')
// run('/api/v1/ping')
// run('/api/v3/time')

// run('/api/v3/exchangeInfo')
// run_query('/api/v3/exchangeInfo')
// run('/api/v3/exchangeInfo?symbol=ETHBTC')
// run('/api/v3/exchangeInfo?symbols=["BTCUSDT","BNBBTC"]')
// run_query('/api/v3/exchangeInfo', {symbol: "ethbtc"})	// illegal
// run_query('/api/v3/exchangeInfo', {symbol: "ETHBTC"})
// run_query('/api/v3/exchangeInfo', {symbols: ["BTCUSDT","BNBBTC"]})
run_query('/api/v3/exchangeInfo', {symbol: "ETHBTC", symbols: ["BTCUSDT","BNBBTC"]})
