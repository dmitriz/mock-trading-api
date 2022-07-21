const hist_trades_example = [
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
module.exports = ({query: { symbol, limit, fromId }, headers}) => {
	if (!headers) throw "API-key format invalid."
	if (!symbol) throw "Mandatory parameter 'symbol' was not sent, was empty/null, or malformed."
	return hist_trades_example
}
