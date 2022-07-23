const req = require('../req')

const { pipeline, map } = require('cpsfy')
const { BINANCE_REST_URLs } = require('./conf')

// const show = x => console.log(
// 	require('util').inspect(x, {depth: null, colors: true})
// )
const show = x => console.dir(x, { depth: null })

// use the 1st base url
const run = ep => req({ url: BINANCE_REST_URLs[0] + ep })(show, show)
const run_query = (ep, query) => req({ url: BINANCE_REST_URLs[0] + ep, query })(show, show)

// iterate over all BINANCE_REST_URLs
const run_mult = ep => BINANCE_REST_URLs.map(url =>
	pipeline({ url: url + ep })(
		req,
		// map(res => res.data)
	)(show, show)
)

// run_mult('/api/v3/ping')
// run('/api/v3/ping')
// run('/api/v3/time')

// run('/api/v3/exchangeInfo')
// run_query('/api/v3/exchangeInfo')
// run('/api/v3/exchangeInfo?symbol=BTCUSDT')
// run('/api/v3/exchangeInfo?symbols=["BTCUSDT","BNBBTC"]')
// run_query('/api/v3/exchangeInfo', {symbol: "ethbtc"})	// illegal
// run_query('/api/v3/exchangeInfo', {symbol: "ETHBTC"})
// run_query('/api/v3/exchangeInfo', {symbols: ["BTCUSDT","BNBBTC"]})
// run_query('/api/v3/exchangeInfo', {symbol: "ETHBTC", symbols: ["BTCUSDT","BNBBTC"]})

// run_query('/api/v3/depth')	// illegal
// run_query('/api/v3/depth', {symbol: "ETHBTC"})
// run_query('/api/v3/depth', {symbol: "ETHBTC", limit: 1})

// run_query('/api/v3/trades')	// illegal
// run_query('/api/v3/trades', {symbol: "ETHBTC"})
// run_query('/api/v3/trades', {symbol: "ETHBTC", limit: 1})

// run_query('/api/v3/aggTrades')	// illegal
// run_query('/api/v3/aggTrades', {symbol: "ETHBTC"})
// run_query('/api/v3/aggTrades', {symbol: "ETHBTC", limit: 1})

// run_query('/api/v3/klines')	// illegal
// run_query('/api/v3/klines', {symbol: "ETHBTC"})	// illegal
// run_query('/api/v3/klines', {symbol: "ETHBTC", interval: '1m'})
// run_query('/api/v3/klines', {symbol: "ETHBTC", interval: '1m', limit: 1})
// run_query('/api/v3/klines', {symbol: "ETHBTC", interval: '1m', startTime: 1658334200000, limit: 2})
// run_query('/api/v3/klines', {symbol: "ETHBTC", interval: '1m', endTime: 1658334200000, limit: 1})
// run_query('/api/v3/klines', {symbol: "ETHBTC", interval: '1m', startTime: 1658334200000, endTime: 1658334360000})
// run_query('/api/v3/klines', {symbol: "ETHBTC", interval: '1m', startTime: 1658334200000, endTime: 1658334360000, limit: 2})

// run_query('/api/v3/avgPrice')	// illegal
// run_query('/api/v3/avgPrice', {symbol: "BTCUSDT"})
// run_query('/api/v3/avgPrice', {symbol: "BNBBUSD"})

// run_query('/api/v3/ticker/24hr')
// run_query('/api/v3/ticker/24hr', {symbol: "ETHBTC"})
// run_query('/api/v3/ticker/24hr', {symbols: ["BTCUSDT","BNBBTC"]})
// run_query('/api/v3/ticker/24hr', {symbol: "ETHBTC", symbols: ["BTCUSDT","BNBBTC"]})	// illegal

// run_query('/api/v3/ticker/price')
// run_query('/api/v3/ticker/price', {symbol: "ETHBTC"})
// run_query('/api/v3/ticker/price', {symbols: ["BTCUSDT","BNBBTC"]})
// run_query('/api/v3/ticker/price', {symbol: "ETHBTC", symbols: ["BTCUSDT","BNBBTC"]})	// illegal

// run_query('/api/v3/ticker/bookTicker')
// run_query('/api/v3/ticker/bookTicker', {symbol: "ETHBTC"})
// run_query('/api/v3/ticker/bookTicker', {symbols: ["BTCUSDT","BNBBTC"]})
// run_query('/api/v3/ticker/bookTicker', {symbol: "ETHBTC", symbols: ["BTCUSDT","BNBBTC"]})	// illegal

// run_query('/api/v3/ticker')	// illegal
// run_query('/api/v3/ticker', {symbol: "ETHBTC"})
// run_query('/api/v3/ticker', {symbol: "ETHBTC", windowSize: '1m'})
// run_query('/api/v3/ticker', {symbols: ["BTCUSDT","BNBBTC"], windowSize: '1m'})
// run_query('/api/v3/ticker', {symbol: "ETHBTC", symbols: ["BTCUSDT","BNBBTC"], windowSize: '1m'})	// illegal


// run_query('/api/v3/historicalTrades', {symbol: "ETHBTC"})	// illegal
