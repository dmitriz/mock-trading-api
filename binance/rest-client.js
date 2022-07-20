const { of } = require('cpsfy')
const { rm_begin } = require('../utils/matcher')
const { base_urls } = require('./conf')

const endpts_map = {

	// https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#test-connectivity
	'/api/v3/ping' : () => ({})

	// https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#check-server-time
,	'/api/v3/time' : () => ({
	  "serverTime": 1499827319559
	})

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
}

const mock_client = ({ url, query, headers, method }) => {
	const endpt = rm_begin(base_urls)(url)
	return of(endpts_map[endpt]({query}))
}

module.exports = mock_client
