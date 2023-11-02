import React, { useEffect, useRef, useState } from 'react'
import { Input, Option, Select, Sheet, Stack, Typography } from '@mui/joy'
import { calculateExchange } from '../../utils';

const CurrencyExchangeCalculator = ({ cryptoValues }) => {
  const [formValues, setFormValues] = useState({
    currency: 1,
    crytoCurrency: 1,
    currencyType: "USD",
    cryptoCurrencyType: "ETH"
  });
  const lastUpdatedField = useRef(null);

  const onCurrencyChange = (e) => {
    const updatedField = {
      field: e.target.name,
      newValue: e.target.value
    }
    lastUpdatedField.current = updatedField.field;
    setFormValues(prev => calculateExchange(updatedField, prev, cryptoValues));
  }

  const onSelectCurrency = (e, field) => {
    const updatedField = {
      field: "currency",
      newValue: formValues.currency
    }
    setFormValues(prev => ({
      ...prev,
      [field]: e.target?.textContent
    }));
    setFormValues(prev => calculateExchange(updatedField, prev, cryptoValues))
  }

  const refreshValues = () => {
    const updatedField = {
      field: lastUpdatedField.current,
      newValue: lastUpdatedField.current === "currency" ? formValues.currency : formValues.crytoCurrency
    }
    setFormValues(prev => calculateExchange(updatedField, prev, cryptoValues));
  }

  useEffect(() => {
    refreshValues();
  }, [cryptoValues]);

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
            type="number"
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
            type="number"
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