const { pipeline } = require('cpsfy')

const rm_begin_str = begin => str => str.startsWith(begin)
	? str.slice(begin.length)
	: undefined

const rm_begin_array = begin_array => str => {
	let begin_matched = begin_array.find(b=>str.startsWith(b))
	return rm_begin_str(begin_matched)(str)
}

const rm_begin = base => str => Array.isArray(base) 
	? rm_begin_array(base)(str)
	: rm_begin_str(base)(str)

module.exports = { rm_begin, rm_begin_str, rm_begin_array }
