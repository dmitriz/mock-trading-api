const { of } = require('cpsfy')
const { rm_begin } = require('../utils/matcher')
const { BINANCE_REST_URLs, BINANCE_WS_URL } = require('./conf')

const endpts_ws_map = {

	// https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#aggregate-trade-streams
	'/api/v3/ping' : () => ({})
}

const mock_ws_client = ({ url, ...rest }) => {
	const endpt = rm_begin(BINANCE_WS_URL)(url)
	return of(endpts_ws_map[endpt]({...rest}))
}

module.exports = mock_ws_client
