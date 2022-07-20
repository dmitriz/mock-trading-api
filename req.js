const { pipeline, map } = require('cpsfy')
const axios = require('axios')
const unpromise = promise => promise.then.bind(promise)

module.exports = (...args) => pipeline(...args)(
	axios,
	unpromise,
	map(res => res.data)
)
