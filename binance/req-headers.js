const { BINANCE_API_KEY } = require('../keys')
const headers = {'X-MBX-APIKEY': BINANCE_API_KEY}

module.exports = req => obj => req({...obj, headers})
