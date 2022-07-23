const { is, isEmpty } = require('ramda')
const val2str = v => is(String, v) ? v : JSON.stringify(v)
const obj2qs = q => Object.entries(q).map( ([k,v]) => k + '=' + val2str(v) ).join('&')
const to_uri = query => is(Object, query) && !isEmpty(query)
  ? '?' + obj2qs(query) 
  : ''

module.exports = { val2str, obj2qs, to_uri }
