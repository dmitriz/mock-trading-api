const { of } = require('cpsfy')
const { rm_begin } = require('../utils/matcher')
const { BINANCE_REST_URLs } = require('./conf')

const endpts_map = {

	// https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#test-connectivity
	'/api/v3/ping' : () => ({})

	// https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#check-server-time
,	'/api/v3/time' : () => ({"serverTime": 1499827319559})

	// https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#exchange-information
,	'/api/v3/exchangeInfo' : require('./endpoint-exchange-info')

	// https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#order-book
,	'/api/v3/depth' : require('./endpoint-market').depth

	// https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#recent-trades-list
,	'/api/v3/trades' : require('./endpoint-market').trades
	
	// https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#compressedaggregate-trades-list
,	'/api/v3/aggTrades' : require('./endpoint-market').aggTrades

	// https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#klinecandlestick-data
,	'/api/v3/klines' : require('./endpoint-market').klines

	// https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#current-average-price
,	'/api/v3/avgPrice' : require('./endpoint-market').avgPrice

	// https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#24hr-ticker-price-change-statistics
,	'/api/v3/ticker/24hr' : require('./endpoint-tickers').ticker24

	// https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-price-ticker
,	'/api/v3/ticker/price' : require('./endpoint-tickers').price

	// https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-order-book-ticker
,	'/api/v3/ticker/bookTicker' : require('./endpoint-tickers').book

	// https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#rolling-window-price-change-statistics
,	'/api/v3/ticker' : require('./endpoint-tickers').ticker

	// https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#old-trade-lookup-market_data
,	'/api/v3/historicalTrades' : require('./endpoint-hist-trades')
}

const mock_client = ({ url, query, headers, method }) => {
	const endpt = rm_begin(BINANCE_REST_URLs)(url)
	return of(endpts_map[endpt]({query}))
}

module.exports = mock_client
