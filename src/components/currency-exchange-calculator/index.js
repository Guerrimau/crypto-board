import React, { useState } from 'react'
import { Input, Option, Select, Sheet, Stack, Typography } from '@mui/joy'

const CurrencyExchangeCalculator = ({ cryptoValues }) => {
  const [formValues, setFormValues] = useState({
    currency: 1,
    crytoCurrency: 1,
    currencyType: "USD",
    cryptoCurrencyType: "ETH"
  });

  const onCurrencyChange = (e) => {
    const field = e.target.name;
    const newValue = e.target.value;
    setFormValues(prev => calculateExchange(field, newValue, prev));
  }

  const onSelectCurrency = (e, field) => {
    setFormValues(prev => ({
      ...prev,
      [field]: e.target?.textContent
    }));
  }

  const calculateExchange = (field, newValue, prev) => {
    const { currencyType, cryptoCurrencyType } = prev;
    const equivalence = cryptoValues?.[cryptoCurrencyType]?.[currencyType];
    
    const calculatedField = field === "currency" ? "crytoCurrency" : "currency";

    return {
      ...prev,
      [field]: newValue,
      [calculatedField]: field === "currency" ? newValue / equivalence : newValue * equivalence
    }
  }

  return (
    <Sheet
      component="section"
      variant="outlined"
      sx={{
        flex: "1",
        borderRadius: "sm",
        p: 2,
      }}>
      <Stack spacing={1}>
        <Typography>Exchange Calculator</Typography>
        <Stack direction="row" spacing={1}>
          <Input
            variant="outlined"
            name="currency"
            value={formValues.currency}
            onChange={onCurrencyChange} />
          <Select
            sx={{ width: "100px" }}
            value={formValues.currencyType}
            onChange={e => onSelectCurrency(e, "currencyType")}>
            {["USD", "EUR"].map(currency => <Option value={currency}>{currency}</Option>)}
          </Select>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Input
            variant="outlined"
            name="crytoCurrency"
            value={formValues.crytoCurrency}
            onChange={onCurrencyChange} />
          <Select
            sx={{ width: "100px" }}
            value={formValues.cryptoCurrencyType}
            onChange={e => onSelectCurrency(e, "cryptoCurrencyType")}>
            {["BTC", "ETH"].map(currency => <Option value={currency}>{currency}</Option>)}
          </Select>
        </Stack>
      </Stack>
    </Sheet>
  )
}

export default CurrencyExchangeCalculator