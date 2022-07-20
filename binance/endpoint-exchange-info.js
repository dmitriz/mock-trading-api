const arr2exhange_info = symbols =>
({
  "timezone": "UTC",
  "serverTime": 1565246363776,
  "rateLimits": [
    {
      //These are defined in the `ENUM definitions` section under `Rate Limiters (rateLimitType)`.
      //All limits are optional
    }
  ],
  "exchangeFilters": [
    //These are the defined filters in the `Filters` section.
    //All filters are optional.
  ],
  "symbols": symbols.map( symbol =>
    ({
      "symbol": symbol,
      "status": "TRADING",
      "baseAsset": "ETH",
      "baseAssetPrecision": 8,
      "quoteAsset": "BTC",
      "quotePrecision": 8, // will be removed in future api versions (v4+)
      "quoteAssetPrecision": 8,
      "baseCommissionPrecision": 8,
      "quoteCommissionPrecision": 8,
      "orderTypes": [
        "LIMIT",
        "LIMIT_MAKER",
        "MARKET",
        "STOP_LOSS",
        "STOP_LOSS_LIMIT",
        "TAKE_PROFIT",
        "TAKE_PROFIT_LIMIT"
      ],
      "icebergAllowed": true,
      "ocoAllowed": true,
      "quoteOrderQtyMarketAllowed": true,
      "allowTrailingStop": false,
      "cancelReplaceAllowed":false,
      "isSpotTradingAllowed": true,
      "isMarginTradingAllowed": true,
      "filters": [
        //These are defined in the Filters section.
        //All filters are optional
      ],
      "permissions": [
        "SPOT",
        "MARGIN"
      ]
    })
  )
})

module.exports = ({query}) => {
  let {symbol, symbols} = query || {}
  if (symbols && symbol) throw "Combination of optional parameters invalid. Recommendation: 'symbol' and 'symbols' cannot both be sent."
  if (symbol) return arr2exhange_info([symbol])
  if (symbols) return arr2exhange_info(symbols)
  return arr2exhange_info(['ETHBTC'])
}
