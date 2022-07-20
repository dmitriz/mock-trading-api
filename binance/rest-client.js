const { of } = require('cpsfy')
const { rm_begin } = require('../utils/matcher')
const { base_urls } = require('./conf')

const endpts_map = {
	// https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#test-connectivity
	// GET /api/v3/ping
	'/api/v3/ping' : () => ({})
,	'/api/v3/time' : () => ({
	  "serverTime": 1499827319559
	})
,	'/api/v3/exchangeInfo' : require('./endpoint-exchange-info')
}

const mock_client = ({ url, query, headers, method }) => {
	const endpt = rm_begin(base_urls)(url)
	return of(endpts_map[endpt]({query}))
}

module.exports = mock_client
