const req = require('../req')

const { BINANCE_REST_URLs } = require('./conf')
const binance_signed = require('./req-signed')(req)
const show = console.log

const run_signed = (endpt, query, method) =>
	binance_signed({
		url: BINANCE_REST_URLs[0] + endpt, 
		query,
		method
	})(show,show)


// run_signed('/api/v3/order/test', {}, 'POST')	// illegal
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT'}, 'POST')	// illegal
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT'}, 'POST')	// illegal
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL"}, 'POST')	// illegal
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "MARKET"}, 'POST')	// illegal
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "MARKET", quantity: 1}, 'POST')
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "MARKET", quoteOrderQty: 100, quantity: 1}, 'POST')	// illegal
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "MARKET", quoteOrderQty: 100}, 'POST')

// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "LIMIT", quantity: 1}, 'POST')	// illegal
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "LIMIT", timeInForce: "GTC", quantity: 1}, 'POST')	// illegal
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "LIMIT", timeInForce: "GTC", price: 80000, quoteOrderQty: 100}, 'POST')	// illegal
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "LIMIT", timeInForce: "GTC", price: 80000}, 'POST')	// illegal
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "LIMIT", timeInForce: "GTC", price: 80000, quantity: 1, recvWindow: 5000}, 'POST')
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "LIMIT", timeInForce: "GTC", price: 80000, quantity: 1, recvWindow: 60001}, 'POST')	// illegal

// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "LIMIT", timeInForce: "GTC", price: 80000, quantity: 1, icebergQty: 1}, 'POST') // illegal
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "LIMIT", timeInForce: "GTC", price: 80000, quantity: 2, icebergQty: 1}, 'POST')
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "LIMIT", timeInForce: "IOC", price: 80000, quantity: 2, icebergQty: 1}, 'POST')	// illegal
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "LIMIT", timeInForce: "IOC", price: 80000, quantity: 2}, 'POST')
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "LIMIT", timeInForce: "FOK", price: 80000, quantity: 2, icebergQty: 1}, 'POST')	// illegal
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "LIMIT", timeInForce: "FOK", price: 80000, quantity: 2}, 'POST')


// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "STOP_LOSS"}, 'POST')	// illegal
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "STOP_LOSS", quantity:1}, 'POST')	// illegal
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "STOP_LOSS", stopPrice: 30000, quantity:1}, 'POST')	// illegal

// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "STOP_LOSS_LIMIT", stopPrice: 30000, quantity:1}, 'POST')	// illegal
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "STOP_LOSS_LIMIT", timeInForce: "GTC", stopPrice: 30000, quantity:1}, 'POST')	// illegal
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "STOP_LOSS_LIMIT", timeInForce: "GTC", price: 80000, stopPrice: 30000, quantity:1}, 'POST')
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "STOP_LOSS_LIMIT", timeInForce: "GTC", price: 80000, trailingDelta: 1000, quantity:1}, 'POST')
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "STOP_LOSS_LIMIT", timeInForce: "GTC", price: 80000, stopPrice: 30000, trailingDelta: 1000, quantity:1}, 'POST')
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "STOP_LOSS_LIMIT", timeInForce: "GTC", price: 80000, stopPrice: 30000, trailingDelta: 1000, quantity:1, icebergQty: 1}, 'POST')	// illegal
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "STOP_LOSS_LIMIT", timeInForce: "GTC", price: 80000, stopPrice: 30000, trailingDelta: 1000, quantity:2, icebergQty: 1}, 'POST')

// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "TAKE_PROFIT"}, 'POST')	// illegal
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "TAKE_PROFIT", quantity:1}, 'POST')	// illegal
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "TAKE_PROFIT", stopPrice: 30000, quantity:1}, 'POST')	// illegal
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "TAKE_PROFIT_LIMIT", timeInForce: "GTC", price: 80000, stopPrice: 30000, quantity: 1}, 'POST')
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "TAKE_PROFIT_LIMIT", timeInForce: "GTC", price: 80000, stopPrice: 30000, trailingDelta: 1000, quantity: 1}, 'POST')
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "TAKE_PROFIT_LIMIT", timeInForce: "GTC", price: 80000, stopPrice: 30000, trailingDelta: 1000, quantity: 1, icebergQty: 1}, 'POST')	// illegal
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "TAKE_PROFIT_LIMIT", timeInForce: "GTC", price: 80000, stopPrice: 30000, trailingDelta: 1000, quantity: 2, icebergQty: 1}, 'POST')

// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "LIMIT_MAKER"}, 'POST')	// illegal
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "LIMIT_MAKER", quantity: 1}, 'POST')	// illegal
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "LIMIT_MAKER", price: 80000, quantity: 1}, 'POST')
// run_signed('/api/v3/order/test', { symbol: 'BTCUSDT', side: "SELL", type: "LIMIT_MAKER", price: 80000, quantity: 2, icebergQty: 1}, 'POST')


// run_signed('/api/v3/order', { symbol: "BNBBUSD", side: "BUY", type: "LIMIT", timeInForce: "GTC", price: 100, quantity: 1}, 'POST')
// run_signed('/api/v3/order', { symbol: "BNBBUSD", side: "BUY", type: "LIMIT", timeInForce: "GTC", price: 100, quantity: 1, newClientOrderId: 1}, 'POST')

// run_signed('/api/v3/order', {symbol: 'BNBBUSD', origClientOrderId: 1}, 'DELETE')
// run_signed('/api/v3/order', {symbol: 'BNBBUSD', orderId: 1332988764}, 'DELETE')

run_signed('/api/v3/order/cancelReplace', { symbol: "BNBBUSD", side: "BUY", type: "LIMIT", timeInForce: "GTC", price: 110, quantity: 1, cancelReplaceMode: 'STOP_ON_FAILURE', cancelOrigClientOrderId: 1}, 'POST')
// run_signed('/api/v3/order/cancelReplace', { symbol: "BNBBUSD", side: "BUY", type: "LIMIT", timeInForce: "GTC", price: 110, quantity: 1, cancelReplaceMode: 'STOP_ON_FAILURE', cancelOrderId: 1333012770})

// run_signed('/api/v3/order', { symbol: 'BNBBUSD' })	// illegal
// run_signed('/api/v3/order', { symbol: 'BNBBUSD', origClientOrderId: 1 })
// run_signed('/api/v3/order', { symbol: 'BNBBUSD', orderId: 1332988764 })


// run_signed('/api/v3/order/oco', { symbol: 'BNBBUSD' }, 'POST')	// illegal
// run_signed('/api/v3/order/oco', { symbol: 'BNBBUSD', side: 'BUY' }, 'POST')	// illegal
// run_signed('/api/v3/order/oco', { symbol: 'BNBBUSD', side: 'BUY', price: 100, stopPrice: 1000, trailingDelta: 50, quantity: 1 }, 'POST')	// illegal


// run_signed('/api/v3/openOrders')
// run_signed('/api/v3/openOrders', { symbol: 'BNBBUSD' })
// run_signed('/api/v3/openOrders', { symbol: 'BTCBUSD' })

// run_signed('/api/v3/openOrders', { symbol: 'BNBBUSD' }, 'DELETE')


// run_signed('/api/v3/allOrders')	// illegal
// run_signed('/api/v3/allOrders', { symbol: 'BNBBUSD' })
// run_signed('/api/v3/allOrders', { symbol: 'BNBBUSD', startTime: 1652420222055 })
// run_signed('/api/v3/allOrders', { symbol: 'BNBBUSD', startTime: 1652420222055, endTime:  1652420222059})


// run_signed('/api/v3/rateLimit/order')

