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

const to_url = query => ('object' == typeof query) && (Object.keys(query).length > 0)
	? '?' + obj2qs(query) 
	: ''

module.exports = ({url, query, headers, method}) => 
	raw_req({
		url: url + to_url(query), 
		headers, 
		method
	})

// module.exports = ({url, query, headers, method}) => query
// 	? raw_req(url + '?' + obj2qs(query), {headers})
// 	: raw_req(url, {headers})
