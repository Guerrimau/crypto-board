const calculateExchange = (updatedField, prev, cryptoValues) => {
  const { currencyType, cryptoCurrencyType } = prev;
  const { field, newValue } = updatedField;
  const equivalence = cryptoValues?.[cryptoCurrencyType]?.[currencyType];

  const calculatedField = field === "currency" ? "crytoCurrency" : "currency";

  return {
    ...prev,
    [field]: newValue,
    [calculatedField]: field === "currency" ? newValue / equivalence : newValue * equivalence
  }
}

export default calculateExchange;