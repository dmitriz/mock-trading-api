const test = require('test-curried')
const mock_client = require('./rest-client')

const symbol2ticker24 = symbol => ({
  "symbol": symbol,
  "priceChange": "-94.99999800",
  "priceChangePercent": "-95.960",
  "weightedAvgPrice": "0.29628482",
  "prevClosePrice": "0.10002000",
  "lastPrice": "4.00000200",
  "lastQty": "200.00000000",
  "bidPrice": "4.00000000",
  "bidQty": "100.00000000",
  "askPrice": "4.00000200",
  "askQty": "100.00000000",
  "openPrice": "99.00000000",
  "highPrice": "100.00000000",
  "lowPrice": "0.10000000",
  "volume": "8913.30000000",
  "quoteVolume": "15.30000000",
  "openTime": 1499783499040,
  "closeTime": 1499869899040,
  "firstId": 28385,   // First tradeId
  "lastId": 28460,    // Last tradeId
  "count": 76         // Trade count
})


const ticker_price_example = {
  "symbol": "LTCBTC",
  "price": "4.00000200"
}
const ticker_prices_example = [
  {
    "symbol": "LTCBTC",
    "price": "4.00000200"
  },
  {
    "symbol": "ETHBTC",
    "price": "4.00000200"
  }
]

const symbol2book = symbol => ({
  "symbol": symbol,
  "bidPrice": "4.00000000",
  "bidQty": "431.00000000",
  "askPrice": "4.00000200",
  "askQty": "9.00000000"
})

const symbol2ticker = symbol => ({
  "symbol":             symbol,
  "priceChange":        "-8.00000000",  // Absolute price change
  "priceChangePercent": "-88.889",      // Relative price change in percent
  "weightedAvgPrice":   "2.60427807",   // QuoteVolume / Volume
  "openPrice":          "9.00000000",
  "highPrice":          "9.00000000",
  "lowPrice":           "1.00000000",
  "lastPrice":          "1.00000000",
  "volume":             "187.00000000",
  "quoteVolume":        "487.00000000", // Sum of (price * volume) for all trades
  "openTime":           1641859200000,  // Open time for ticker window
  "closeTime":          1642031999999,  // Close time for ticker window
  "firstId":            0,              // Trade IDs
  "lastId":             60,
  "count":              61              // Number of trades in the interval
})

test('ticker/24h throws with both symbol and symbols declared', t=>{
	t.throws(
		() => mock_client({
			url: 'https://api.binance.com/api/v3/ticker/24h', 
			query: {symbol: 'ETHBNB', symbols: ['ETHBNB', 'LTCBTC']}
		})(console.log)
	)
})
test('ticker/24h works without params', t=>{
	mock_client({
		url: 'https://api.binance.com/api/v3/ticker/24hr', 
	})
	(t.cDeepEqual(['BNBBTC'].map(symbol2ticker24)))
})
test('ticker/24h works with symbol', t=>{
	mock_client({
		url: 'https://api.binance.com/api/v3/ticker/24hr', 
		query: {symbol: 'BNBBTC'}
	})
	(t.cDeepEqual(symbol2ticker24('BNBBTC')))
})
test('ticker/24h works with symbols', t=>{
	mock_client({
		url: 'https://api.binance.com/api/v3/ticker/24hr', 
		query: {symbols: ['ETHBNB', 'LTCBTC']}
	})
	(t.cDeepEqual(['ETHBNB', 'LTCBTC'].map(symbol2ticker24)))
})

test('ticker/price throws with both symbol and symbols declared', t=>{
	t.throws(
		() => mock_client({
			url: 'https://api.binance.com/api/v3/ticker/price', 
			query: {symbol: 'ETHBNB', symbols: ['ETHBNB', 'LTCBTC']}
		})(console.log)
	)
})
test('ticker/price works without params', t=>{
	mock_client({
		url: 'https://api.binance.com/api/v3/ticker/price', 
	})
	(t.cDeepEqual(ticker_prices_example))
})
test('ticker/price works with symbol', t=>{
	mock_client({
		url: 'https://api.binance.com/api/v3/ticker/price', 
		query: {symbol: 'LTCBTC'}
	})
	(t.cDeepEqual(ticker_price_example))
})
test('ticker/price works with symbols', t=>{
	mock_client({
		url: 'https://api.binance.com/api/v3/ticker/price', 
		query: {symbols: ['LTCBTC', 'ETHBTC']}
	})
	(t.cDeepEqual(ticker_prices_example))
})


test('book ticker throws with both symbol and symbols declared', t=>{
	t.throws(
		() => mock_client({
			url: 'https://api.binance.com/api/v3/ticker/bookTicker', 
			query: {symbol: 'ETHBNB', symbols: ['ETHBNB', 'LTCBTC']}
		})(console.log)
	)
})
test('book ticker works without params', t=>{
	mock_client({
		url: 'https://api.binance.com/api/v3/ticker/bookTicker', 
	})
	(t.cDeepEqual(['LTCBTC', 'ETHBTC'].map(symbol2book)))
})
test('book ticker works with symbol', t=>{
	mock_client({
		url: 'https://api.binance.com/api/v3/ticker/bookTicker', 
		query: {symbol: 'LTCBTC'}
	})
	(t.cDeepEqual(symbol2book('LTCBTC')))
})
test('ticker/price works with symbols', t=>{
	mock_client({
		url: 'https://api.binance.com/api/v3/ticker/bookTicker', 
		query: {symbols: ['LTCBTC', 'ETHBTC']}
	})
	(t.cDeepEqual(['LTCBTC', 'ETHBTC'].map(symbol2book)))
})

test('book ticker throws without query', t=>{
	t.throws(
		() => mock_client({
			url: 'https://api.binance.com/api/v3/ticker', 
		})(console.log)
	)
})
test('ticker throws with both symbol and symbols declared', t=>{
	t.throws(
		() => mock_client({
			url: 'https://api.binance.com/api/v3/ticker', 
			query: {symbol: 'ETHBNB', symbols: ['ETHBNB', 'LTCBTC']}
		})(console.log)
	)
})
test('ticker works with symbol', t=>{
	mock_client({
		url: 'https://api.binance.com/api/v3/ticker', 
		query: {symbol: 'LTCBTC'}
	})
	(t.cDeepEqual(symbol2ticker('LTCBTC')))
})
test('ticker works with symbols', t=>{
	mock_client({
		url: 'https://api.binance.com/api/v3/ticker', 
		query: {symbols: ['LTCBTC', 'ETHBNB']}
	})
	(t.cDeepEqual(['LTCBTC', 'ETHBNB'].map(symbol2ticker)))
})

