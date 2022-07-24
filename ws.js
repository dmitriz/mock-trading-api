const { pipeline, map } = require('cpsfy')
const ws = require('ws')

// generic function, changed to mock for testing
const ws_fn = (...args) => new ws(...args)

// const log = console.log
// const onStale = process.exit

const ws_ping_cps = ws_fn => (url, delay=10000, onStale = process.exit) => {
	let w = ws_fn(url)
	let dead = false
	w.on('pong', _ => {dead = false})
	setInterval(_ => {
		if (dead) onStale()
		dead = true
		w.ping()
	}, delay)
	return cb => w.on('message', cb)
}

module.exports = (...args) => pipeline(...args)(
		ws_ping_cps(ws_fn),
		map(JSON.parse),
	)
