const test = require('test-curried')
const mock_client = require('./rest-client')

const hist_trades_example = [
  {
    "id": 28457,
    "price": "4.00000100",
    "qty": "12.00000000",
    "quoteQty": "48.000012",
    "time": 1499865549590,
    "isBuyerMaker": true,
    "isBestMatch": true
  }
]

test('historicalTrades works with symbol=ETHBNB', t=>{
	mock_client({
		url: 'https://api.binance.com/api/v3/historicalTrades', 
		query: {symbol: 'ETHBNB'},
		headers: {'X-MBX-APIKEY': 'BINANCE_API_KEY'}
	})
	(t.cDeepEqual(hist_trades_example))
})
test('historicalTrades throws without query', t=>{
	t.throws(
		() => mock_client({
			url: 'https://api.binance.com/api/v3/historicalTrades', 
		})(console.log)
	)
})
test('historicalTrades throws without symbol', t=>{
	t.throws(
		() => mock_client({
			url: 'https://api.binance.com/api/v3/historicalTrades', 
			query: {limit: 1}
		})(console.log)
	)
})
test('historicalTrades throws without headers', t=>{
	t.throws(
		() => mock_client({
			url: 'https://api.binance.com/api/v3/historicalTrades', 
			query: {symbol: 'ETHBNB'},
		})(console.log)
	)
})
