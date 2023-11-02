
const getCryptoCurrencyValues = async () => {
  const response = await fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR");
  return response.json();
}

const cryptoCompareApi = {
  getCryptoCurrencyValues
}

export default cryptoCompareApi;