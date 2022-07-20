const test = require('test-curried')
const mock_client = require('./rest-client')

test('ping endpoint', t=>{
	mock_client({url: 'https://api.binance.com/api/v3/ping'})
	(t.cDeepEqual({}))
})
test('ping endpoint with alternative url', t=>{
	mock_client({url: 'https://api2.binance.com/api/v3/ping'})
	(t.cDeepEqual({}))
})

test('server time', t=>{
	mock_client({url: 'https://api.binance.com/api/v3/time'})
	(t.cDeepEqual({"serverTime": 1499827319559}))
})