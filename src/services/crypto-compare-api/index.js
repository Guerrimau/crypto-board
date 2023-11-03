
const getCryptoCurrencyValues = async () => {
  const response = await fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR");
  return response.json();
}

const getHistoricalValues = async (crypto = "BTC") => {
  const response = await fetch(`https://min-api.cryptocompare.com/data/v2/histominute?fsym=${crypto}&tsym=USD`);
  return response.json();
}

const cryptoCompareApi = {
  getCryptoCurrencyValues,
  getHistoricalValues
}

export default cryptoCompareApi;