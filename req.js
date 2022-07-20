const { pipeline, map } = require('cpsfy')
const axios = require('axios')

const val2str = v => 'string' == typeof v ? v : JSON.stringify(v)
const obj2qs = q => Object.entries(q).map( ([k,v]) => k + '=' + val2str(v) ).join('&')

const unpromise = promise => promise.then.bind(promise)
const raw_req = (...args) => pipeline(...args)(
	axios,
	unpromise,
	map(res => res.data)
)

module.exports = ({url, query}) => query
	? raw_req(url + '?' + obj2qs(query))
	: raw_req(url)
