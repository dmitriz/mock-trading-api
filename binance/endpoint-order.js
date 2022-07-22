module.exports = {
  'test' : ({method, headers, query: { 
    timestamp, 
    signature, 
    symbol, 
    side, 
    type, 
    quantity, 
    quoteOrderQty,
    timeInForce,
    price,
    stopPrice,
    trailingDelta,
    icebergQty
  }}) => {
    if (!headers['X-MBX-APIKEY']) throw "API-key format invalid."
    if (!timestamp || !signature) throw "Need timestamp and signature."
    if (!symbol) throw "Mandatory parameter 'symbol' was not sent, was empty/null, or malformed."
    if (!side) throw "Mandatory parameter 'side' was not sent, was empty/null, or malformed."
    if (!type) throw "Mandatory parameter 'type' was not sent, was empty/null, or malformed."
    if (type =='MARKET') {
      if (!quantity && !quoteOrderQty) throw "Param 'quantity' or 'quoteOrderQty' must be sent, but both were empty/null!"
      if (quantity && quoteOrderQty) throw "Parameter 'quoteOrderQty' sent when not required."
    }
    if (['LIMIT', 'STOP_LOSS_LIMIT', 'TAKE_PROFIT_LIMIT'].includes(type)) {
      if (!timeInForce) throw "Mandatory parameter 'timeInForce' was not sent, was empty/null, or malformed."
    } 
    if (['STOP_LOSS', 'STOP_LOSS_LIMIT', 'TAKE_PROFIT', 'TAKE_PROFIT_LIMIT'].includes(type)) {
      if (!quantity) throw "Mandatory parameter 'quantity' was not sent, was empty/null, or malformed."
      if (!stopPrice && !trailingDelta) throw "At least one of 'stopPrice' and 'trailingDelta' was not sent."
    }
    if (['LIMIT', 'STOP_LOSS_LIMIT', 'TAKE_PROFIT_LIMIT', 'LIMIT_MAKER'].includes(type)) {
      if (!quantity) throw "Mandatory parameter 'quantity' was not sent, was empty/null, or malformed."
      if (!price) throw "Mandatory parameter 'price' was not sent, was empty/null, or malformed."      
    }
    if (['LIMIT', 'LIMIT_MAKER', 'STOP_LOSS_LIMIT', 'TAKE_PROFIT_LIMIT'].includes(type)) {
      if (icebergQty && icebergQty >= quantity) throw 'IcebergQty exceeds QTY.'
    }
    return {}
  }
}
