const ws = require('../ws')
const { pipeline, map } = require('cpsfy')
const { BINANCE_WS_URL } = require('./conf')

const show = x => console.dir(x, { depth: null })

// use the 1st base url
const run_ws = ep => ws(BINANCE_WS_URL + ep)(show)

// run_ws('/stream?streams=btcbusd@aggTrade')
// run_ws('/stream?streams=btcbusd@trade')
// run_ws('/stream?streams=btcbusd@kline_1m')
// run_ws('/stream?streams=btcbusd@kline_1m/btcbusd@kline_1d')
// run_ws('/stream?streams=btcbusd@miniTicker')
// run_ws('/stream?streams=!miniTicker@arr')
// run_ws('/stream?streams=btcbusd@ticker')
// run_ws('/stream?streams=!ticker@arr')
// run_ws('/stream?streams=btcbusd@ticker_1h')
// run_ws('/stream?streams=btcbusd@ticker_1h/btcbusd@ticker_4h')
// run_ws('/stream?streams=!ticker_1h@arr')

// run_ws('/stream?streams=btcbusd@bookTicker')
// run_ws('/stream?streams=!bookTicker')
// run_ws('/stream?streams=btcbusd@depth5/btcbusd@depth10')
// run_ws('/stream?streams=btcbusd@depth5@100ms')
// run_ws('/stream?streams=btcbusd@depth')

// run_ws('/stream?streams=Aype7V3DOGIRqXji1FWM6UX9NbfYJ8J0LUDlj4v6ld16KuEO2crfHVIl30JE')
