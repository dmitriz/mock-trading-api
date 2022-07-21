const symbol2ticker = symbol => 
  ({
    "symbol": symbol,
    "priceChange": "-94.99999800",
    "priceChangePercent": "-95.960",
    "weightedAvgPrice": "0.29628482",
    "prevClosePrice": "0.10002000",
    "lastPrice": "4.00000200",
    "lastQty": "200.00000000",
    "bidPrice": "4.00000000",
    "bidQty": "100.00000000",
    "askPrice": "4.00000200",
    "askQty": "100.00000000",
    "openPrice": "99.00000000",
    "highPrice": "100.00000000",
    "lowPrice": "0.10000000",
    "volume": "8913.30000000",
    "quoteVolume": "15.30000000",
    "openTime": 1499783499040,
    "closeTime": 1499869899040,
    "firstId": 28385,   // First tradeId
    "lastId": 28460,    // Last tradeId
    "count": 76         // Trade count
  })
const symbol2price = symbol => ({
  "symbol": symbol,
  "price": "4.00000200"
})
const symbol2book = symbol => ({
  "symbol": symbol,
  "bidPrice": "4.00000000",
  "bidQty": "431.00000000",
  "askPrice": "4.00000200",
  "askQty": "9.00000000"
})
const symbol2tickerWindow = symbol => ({
  "symbol":             symbol,
  "priceChange":        "-8.00000000",  // Absolute price change
  "priceChangePercent": "-88.889",      // Relative price change in percent
  "weightedAvgPrice":   "2.60427807",   // QuoteVolume / Volume
  "openPrice":          "9.00000000",
  "highPrice":          "9.00000000",
  "lowPrice":           "1.00000000",
  "lastPrice":          "1.00000000",
  "volume":             "187.00000000",
  "quoteVolume":        "487.00000000", // Sum of (price * volume) for all trades
  "openTime":           1641859200000,  // Open time for ticker window
  "closeTime":          1642031999999,  // Close time for ticker window
  "firstId":            0,              // Trade IDs
  "lastId":             60,
  "count":              61              // Number of trades in the interval
})




module.exports = {
  'ticker24' : ({query}) => {
    if (!query) return [symbol2ticker("BNBBTC")]
    const { symbol, symbols } = query
    if (symbols && symbol) throw "Combination of optional parameters invalid. Recommendation: 'symbol' and 'symbols' cannot both be sent."
    if (symbol) return symbol2ticker(symbol)
    if (symbols) return symbols.map(symbol2ticker)
  }
, 'price' : ({query}) => {
    if (!query) return ["LTCBTC", "ETHBTC"].map(symbol2price)
    const { symbol, symbols } = query
    if (symbols && symbol) throw "Combination of optional parameters invalid. Recommendation: 'symbol' and 'symbols' cannot both be sent."
    if (symbol) return symbol2price(symbol)
    if (symbols) return symbols.map(symbol2price)
  }
, 'book' : ({query}) => {
    if (!query) return ["LTCBTC", "ETHBTC"].map(symbol2book)
    const { symbol, symbols } = query
    if (symbols && symbol) throw "Combination of optional parameters invalid. Recommendation: 'symbol' and 'symbols' cannot both be sent."
    if (symbol) return symbol2book(symbol)
    if (symbols) return symbols.map(symbol2book)
  }
, 'ticker' : ({query}) => {
    if (!query) throw "Combination of optional parameters invalid. Recommendation: send one of 'symbol', 'symbols'."
    const { symbol, symbols, windowSize } = query
    if (symbols && symbol) throw "Combination of optional parameters invalid. Recommendation: 'symbol' and 'symbols' cannot both be sent."
    if (symbol) return symbol2tickerWindow(symbol)
    if (symbols) return symbols.map(symbol2tickerWindow)
  }
}

