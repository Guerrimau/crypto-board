import React from 'react';
import { Sheet, Stack, Table, Typography } from '@mui/joy';
import { CurrencyExchangeCalculator, CryptoValuesChart, CryptoValuesTable } from '../../components';

const DashboardPage = () => {
  return (
    <Stack component="main" width="1000px" spacing={3}>
      <Typography level="h1">CryptoCurrency Dashboard</Typography>

      <Stack direction={"row"} gap={3}>
        <CryptoValuesChart />
        <CurrencyExchangeCalculator />
      </Stack>

      <Stack direction="row" justifyContent="space-around">
        <Typography>1 BTC = 3492.93</Typography>
        <Typography>1 ETC = 392.93 USD</Typography>
      </Stack>

      <Stack direction="row" gap={3}>
        <Stack spacing={1}>
          <Typography>Bitcoin - BTC</Typography>
          <CryptoValuesTable />
        </Stack>
        <Stack spacing={1}>
          <Typography>Btherium - ETH</Typography>
          <CryptoValuesTable />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default DashboardPage