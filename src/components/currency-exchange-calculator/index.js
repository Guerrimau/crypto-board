import React from 'react'
import { Input, Option, Select, Sheet, Stack, Typography } from '@mui/joy'
import { CURRENCIES } from '../../constants'

const CurrencyExchangeCalculator = () => {


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
          <Input variant="outlined" />
          <Select sx={{ width: "100px" }}>
            {CURRENCIES.map(currency => {
              return (
                <Option value={currency}>{currency}</Option>
              )
            })}
          </Select>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Input variant="outlined" />
          <Select sx={{ width: "100px" }}>
            {CURRENCIES.map(currency => {
              return (
                <Option value={currency}>{currency}</Option>
              )
            })}
          </Select>
        </Stack>
      </Stack>
    </Sheet>
  )
}

export default CurrencyExchangeCalculator