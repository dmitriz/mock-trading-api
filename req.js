const { pipeline, map } = require('cpsfy')
const axios = require('axios')
const { is, isEmpty } = require('ramda')

const val2str = v => is(String, v) ? v : JSON.stringify(v)
const obj2qs = q => Object.entries(q).map( ([k,v]) => k + '=' + val2str(v) ).join('&')

const unpromise = promise => promise.then.bind(promise)
const raw_req = (...args) => pipeline(...args)(
	axios,
	unpromise,
	map(res => res.data)
)

const to_url = query => is(Object, query) && !isEmpty(query)
	? '?' + obj2qs(query) 
	: ''

module.exports = ({url, query, ...rest}) => raw_req({url: url + to_url(query), ...rest})

// module.exports = ({url, query, headers, method}) => query
// 	? raw_req(url + '?' + obj2qs(query), {headers})
// 	: raw_req(url, {headers})
