const depth_example = {
  "lastUpdateId": 1027024,
  "bids": [
    [
      "4.00000000",     // PRICE
      "431.00000000"    // QTY
    ]
  ],
  "asks": [
    [
      "4.00000200",
      "12.00000000"
    ]
  ]
}
const trades_example = [
  {
    "id": 28457,
    "price": "4.00000100",
    "qty": "12.00000000",
    "quoteQty": "48.000012",
    "time": 1499865549590,
    "isBuyerMaker": true,
    "isBestMatch": true
  }
]
const aggTrades_example = [
  {
    "a": 26129,         // Aggregate tradeId
    "p": "0.01633102",  // Price
    "q": "4.70443515",  // Quantity
    "f": 27781,         // First tradeId
    "l": 27781,         // Last tradeId
    "T": 1498793709153, // Timestamp
    "m": true,          // Was the buyer the maker?
    "M": true           // Was the trade the best price match?
  }
]
const kleines_example = [
  [
    1499040000000,      // Open time
    "0.01634790",       // Open
    "0.80000000",       // High
    "0.01575800",       // Low
    "0.01577100",       // Close
    "148976.11427815",  // Volume
    1499644799999,      // Close time
    "2434.19055334",    // Quote asset volume
    308,                // Number of trades
    "1756.87402397",    // Taker buy base asset volume
    "28.46694368",      // Taker buy quote asset volume
    "17928899.62484339" // Ignore.
  ]
]
const avgPrice_example = {
  "mins": 5,
  "price": "9.35751834"
}


module.exports = {
  'depth' : ({query: { symbol, limit }}) => {
    if (!symbol) throw "Mandatory parameter 'symbol' was not sent, was empty/null, or malformed."
    return depth_example
  }
, 'trades' : ({query: { symbol, limit }}) => {
    if (!symbol) throw "Mandatory parameter 'symbol' was not sent, was empty/null, or malformed."
    return trades_example
  }
, 'aggTrades' : ({query: { symbol, limit }}) => {
    if (!symbol) throw "Mandatory parameter 'symbol' was not sent, was empty/null, or malformed."
    return aggTrades_example
  }
,  'klines' : ({query: { symbol, interval, startTime, endTime, limit }}) => {
    if (!symbol) throw "Mandatory parameter 'symbol' was not sent, was empty/null, or malformed."
    if (!interval) throw "Mandatory parameter 'interval' was not sent, was empty/null, or malformed."
    return kleines_example
  }
, 'avgPrice' : ({query: { symbol }}) => {
    if (!symbol) throw "Mandatory parameter 'symbol' was not sent, was empty/null, or malformed."
    return avgPrice_example
  }
}

