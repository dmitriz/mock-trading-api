const { pipeline, map } = require('cpsfy')
const axios = require('axios')
const { to_uri } = require('./utils/params')

const unpromise = promise => promise.then.bind(promise)
const raw_req = (...args) => pipeline(...args)(
	axios,
	unpromise,
	map(
		res => res.data, 
		err => [err.response.config, err.response.data]
	)
)

module.exports = ({url, query, ...rest}) => raw_req({url: url + to_uri(query), ...rest})
