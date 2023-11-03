import React from 'react';
import { useQueries, useQuery } from '@tanstack/react-query';
import { Stack, Typography } from '@mui/joy';
import { CurrencyExchangeCalculator, CryptoValuesChart, CryptoValuesTable } from '../../components';
import cryptoCompareApi from '../../services/crypto-compare-api';

const cryptos = ["BTC", "ETH"];

const DashboardPage = () => {
  const { data: cryptoValues, isLoading: cryptoValuesLoading } = useQuery({
    queryKey: ["getCryptoValues"],
    queryFn: cryptoCompareApi.getCryptoCurrencyValues,
    refetchInterval: 10000,
  });

  const historicalValues = useQueries({
    queries: cryptos.map(crypto => ({
      queryKey: ["historicalValues", crypto],
      queryFn: () => cryptoCompareApi.getHistoricalValues(crypto),
      refetchInterval: 10000,
    }))
  });

  return (
    <Stack component="main" width="1000px" spacing={3}>
      <Typography level="h1">CryptoCurrency Dashboard</Typography>

      <Stack direction="row" height="350px" gap={2}>
        <CryptoValuesChart historicalValues={historicalValues} />
        <CurrencyExchangeCalculator cryptoValues={cryptoValues} />
      </Stack>

      <Stack direction="row" justifyContent="space-around">
        <Typography level="h4">1 BTC = {cryptoValues?.BTC?.USD}</Typography>
        <Typography level="h4">1 ETH = {cryptoValues?.ETH?.USD} USD</Typography>
      </Stack>

      <Stack direction="row" gap={3}>
        <Stack spacing={1}>
          <Typography>Bitcoin - BTC</Typography>
          <CryptoValuesTable />
        </Stack>
        <Stack spacing={1}>
          <Typography>Etherium - ETH</Typography>
          <CryptoValuesTable />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default DashboardPage