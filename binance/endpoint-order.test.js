const test = require('test-curried')
const req_sign = require('./req-signed')
const mock_client = require('./rest-client')
const mock_signed = req_sign(mock_client)

test('test new order throws without query', t=>{
	t.throws(
		() => mock_client({
			method: 'POST',
			url: 'https://api.binance.com/api/v3//order/test',
		})(console.log)
	)
})
test('test new order throws with query missing symbol', t=>{
	t.throws(
		() => mock_client({
			method: 'POST',
			url: 'https://api.binance.com/api/v3//order/test',
			query: {},
		})(console.log)
	)
})
test('test new order throws with query missing symbol/side', t=>{
	t.throws(
		() => mock_client({
			method: 'POST',
			url: 'https://api.binance.com/api/v3//order/test',
			query: {symbol: 'BTCUSDT'}
		})(console.log)
	)
})
test('test new order throws with query missing symbol/side/type', t=>{
	t.throws(
		() => mock_client({
			method: 'POST',
			url: 'https://api.binance.com/api/v3/order/test',
			query: { symbol: 'BTCUSDT', side: "SELL"},
		})
	)
})
test('test new MARKET order throws with query missing symbol/side/quantity', t=>{
	t.throws(
		() => mock_signed({
			method: 'POST',
			url: 'https://api.binance.com/api/v3/order/test',
			query: { symbol: 'BTCUSDT', side: "SELL", type: "MARKET"},
		})
	)
})
test('test new MARKET order throws with both quantity and quoteOrderQty', t=>{
	t.throws(
		() => mock_signed({
			method: 'POST',
			url: 'https://api.binance.com/api/v3/order/test',
			query: { symbol: 'BTCUSDT', side: "SELL", type: "MARKET", quantity: 1, quoteOrderQty: 100},
		})
	)
})
test('test new MARKET order works with symbol/side/quantity', t=>{
	mock_signed({
		method: 'POST',
		url: 'https://api.binance.com/api/v3/order/test',
		query: { symbol: 'BTCUSDT', side: "SELL", type: "MARKET", quantity: 1},
	})
	(t.cDeepEqual({}))
})
test('test new MARKET order works with symbol/side/quoteOrderQty', t=>{
	mock_signed({
		method: 'POST',
		url: 'https://api.binance.com/api/v3/order/test',
		query: { symbol: 'BTCUSDT', side: "SELL", type: "MARKET", quoteOrderQty: 100},
	})
	(t.cDeepEqual({}))
})

test('test new LIMIT order throws with query missing timeInForce', t=>{
	t.throws(
		() => mock_signed({
			method: 'POST',
			url: 'https://api.binance.com/api/v3/order/test',
			query: {symbol: 'BTCUSDT', side: "SELL", type: "LIMIT"},
		})
	)
})
test('test new LIMIT order throws with query missing price', t=>{
	t.throws(
		() => mock_signed({
			method: 'POST',
			url: 'https://api.binance.com/api/v3/order/test',
			query: {symbol: 'BTCUSDT', side: "SELL", type: "LIMIT", timeInForce: "GTC"},
		})
	)
})
test('test new LIMIT order throws with query missing quantity', t=>{
	t.throws(
		() => mock_signed({
			method: 'POST',
			url: 'https://api.binance.com/api/v3/order/test',
			query: {symbol: 'BTCUSDT', side: "SELL", type: "LIMIT", timeInForce: "GTC", price: 80000},
		})
	)
})
test('test new LIMIT order works with symbol/side/quantity/timeInForce/price', t=>{
	mock_signed({
		method: 'POST',
		url: 'https://api.binance.com/api/v3/order/test',
		query: { symbol: 'BTCUSDT', side: "SELL", type: "LIMIT", timeInForce: "GTC", price: 80000, quantity: 1},
	})
	(t.cDeepEqual({}))
})
test('test new LIMIT order throws with icebergQty >= quantity', t=>{
	t.throws(
		() => mock_signed({
			method: 'POST',
			url: 'https://api.binance.com/api/v3/order/test',
			query: {ssymbol: 'BTCUSDT', side: "SELL", type: "LIMIT", timeInForce: "GTC", price: 80000, quantity: 1, icebergQty: 1},
		})
	)
})
test('test new LIMIT order works with symbol/side/quantity/timeInForce/price and icebergQty < quantity', t=>{
	mock_signed({
		method: 'POST',
		url: 'https://api.binance.com/api/v3/order/test',
		query: { symbol: 'BTCUSDT', side: "SELL", type: "LIMIT", timeInForce: "GTC", price: 80000, quantity: 2, icebergQty: 1},
	})
	(t.cDeepEqual({}))
})


test('test new STOP_LOSS_LIMIT order throws with query missing timeInForce', t=>{
	t.throws(
		() => mock_signed({
			method: 'POST',
			url: 'https://api.binance.com/api/v3/order/test',
			query: { symbol: 'BTCUSDT', side: "SELL", type: "STOP_LOSS_LIMIT", quantity: 1},
		})
	)
})
test('test new STOP_LOSS_LIMIT order throws with query missing price', t=>{
	t.throws(
		() => mock_signed({
			method: 'POST',
			url: 'https://api.binance.com/api/v3/order/test',
			query: { symbol: 'BTCUSDT', side: "SELL", type: "STOP_LOSS_LIMIT", timeInForce: "GTC", quantity: 1},
		})
	)
})
test('test new STOP_LOSS_LIMIT order throws with query missing stopPrice and trailingDelta', t=>{
	t.throws(
		() => mock_signed({
			method: 'POST',
			url: 'https://api.binance.com/api/v3/order/test',
			query: { symbol: 'BTCUSDT', side: "SELL", type: "STOP_LOSS_LIMIT", timeInForce: "GTC", price: 80000, quantity: 1},
		})
	)
})
test('test new STOP_LOSS_LIMIT order works with symbol/side/quantity/timeInForce/price and trailingDelta', t=>{
	mock_signed({
		method: 'POST',
		url: 'https://api.binance.com/api/v3/order/test',
		query: { symbol: 'BTCUSDT', side: "SELL", type: "STOP_LOSS_LIMIT", timeInForce: "GTC", price: 80000, trailingDelta: 1000, quantity:1},
	})
	(t.cDeepEqual({}))
})
test('test new STOP_LOSS_LIMIT order works with symbol/side/quantity/timeInForce/price and stopPrice', t=>{
	mock_signed({
		method: 'POST',
		url: 'https://api.binance.com/api/v3/order/test',
		query: { symbol: 'BTCUSDT', side: "SELL", type: "STOP_LOSS_LIMIT", timeInForce: "GTC", price: 80000, stopPrice: 30000, quantity:1},
	})
	(t.cDeepEqual({}))
})
test('test new STOP_LOSS_LIMIT order works with symbol/side/quantity/timeInForce/price and both stopPrice and trailingDelta', t=>{
	mock_signed({
		method: 'POST',
		url: 'https://api.binance.com/api/v3/order/test',
		query: { symbol: 'BTCUSDT', side: "SELL", type: "STOP_LOSS_LIMIT", timeInForce: "GTC", price: 80000, stopPrice: 30000, trailingDelta: 1000, quantity:1},
	})
	(t.cDeepEqual({}))
})


test('test new TAKE_PROFIT_LIMIT order throws with query missing timeInForce', t=>{
	t.throws(
		() => mock_signed({
			method: 'POST',
			url: 'https://api.binance.com/api/v3/order/test',
			query: { symbol: 'BTCUSDT', side: "SELL", type: "TAKE_PROFIT_LIMIT", price: 80000, quantity: 1},
		})
	)
})
test('test new TAKE_PROFIT_LIMIT order throws with query missing price', t=>{
	t.throws(
		() => mock_signed({
			method: 'POST',
			url: 'https://api.binance.com/api/v3/order/test',
			query: { symbol: 'BTCUSDT', side: "SELL", type: "TAKE_PROFIT_LIMIT", timeInForce: "GTC", quantity: 1},
		})
	)
})
test('test new TAKE_PROFIT_LIMIT order throws with query missing stopPrice and trailingDelta', t=>{
	t.throws(
		() => mock_signed({
			method: 'POST',
			url: 'https://api.binance.com/api/v3/order/test',
			query: { symbol: 'BTCUSDT', side: "SELL", type: "TAKE_PROFIT_LIMIT", timeInForce: "GTC", price: 80000, quantity: 1},
		})
	)
})
test('test new TAKE_PROFIT_LIMIT order works with symbol/side/quantity/timeInForce/price and stopPrice', t=>{
	mock_signed({
		method: 'POST',
		url: 'https://api.binance.com/api/v3/order/test',
		query: { symbol: 'BTCUSDT', side: "SELL", type: "TAKE_PROFIT_LIMIT", timeInForce: "GTC", price: 80000, stopPrice: 30000, quantity:1},
	})
	(t.cDeepEqual({}))
})
test('test new TAKE_PROFIT_LIMIT order works with symbol/side/quantity/timeInForce/price and trailingDelta', t=>{
	mock_signed({
		method: 'POST',
		url: 'https://api.binance.com/api/v3/order/test',
		query: { symbol: 'BTCUSDT', side: "SELL", type: "TAKE_PROFIT_LIMIT", timeInForce: "GTC", price: 80000, trailingDelta: 1000, quantity:1},
	})
	(t.cDeepEqual({}))
})
test('test new TAKE_PROFIT_LIMIT order works with symbol/side/quantity/timeInForce/price and both stopPrice and trailingDelta', t=>{
	mock_signed({
		method: 'POST',
		url: 'https://api.binance.com/api/v3/order/test',
		query: { symbol: 'BTCUSDT', side: "SELL", type: "TAKE_PROFIT_LIMIT", timeInForce: "GTC", price: 80000, stopPrice: 30000, trailingDelta: 1000, quantity:1},
	})
	(t.cDeepEqual({}))
})

test('test new LIMIT_MAKER order throws with query missing quantity', t=>{
	t.throws(
		() => mock_signed({
			method: 'POST',
			url: 'https://api.binance.com/api/v3/order/test',
			query: { symbol: 'BTCUSDT', side: "SELL", type: "LIMIT_MAKER"},
		})
	)
})
test('test new LIMIT_MAKER order throws with query missing price', t=>{
	t.throws(
		() => mock_signed({
			method: 'POST',
			url: 'https://api.binance.com/api/v3/order/test',
			query: { symbol: 'BTCUSDT', side: "SELL", type: "LIMIT_MAKER", quantity: 1},
		})
	)
})
test('test new LIMIT_MAKER order works with symbol/side/quantity/price', t=>{
	mock_signed({
		method: 'POST',
		url: 'https://api.binance.com/api/v3/order/test',
		query: { symbol: 'BTCUSDT', side: "SELL", type: "LIMIT_MAKER", price: 80000, quantity:1},
	})
	(t.cDeepEqual({}))
})

