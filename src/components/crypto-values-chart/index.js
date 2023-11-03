import React from 'react';
import { Sheet } from '@mui/joy';
import { Chart } from "react-charts";
import { UNIX_TIMESTAMP } from '../../constants';

const CryptoValuesChart = ({ historicalValues }) => {
  const [
    { data: btcHistoricalValuesRaw, isLoading: btcLoading },
    { data: ethHistoricalValuesRaw, isLoading: ethLoading }
  ] = historicalValues;

  const primaryAxis = React.useMemo(
    () => ({
      getValue: (data) => new Date(data.date * UNIX_TIMESTAMP),
    }),
    []
  )
  const secondaryAxes = React.useMemo(
    () => [
      {
        getValue: (data) => data.amount,
        elementType: 'line',
      },
    ],
    []
  )

  const btcHistoricalValues = btcHistoricalValuesRaw?.Data?.Data || [];
  const ethHistoricalValues = ethHistoricalValuesRaw?.Data?.Data || [];

  if(btcLoading || ethLoading) return null;

  const data = [
    {
      label: 'Bitcoin',
      data: btcHistoricalValues.map(item => ({
        date: item.time,
        amount: item.open
      }))
    },{
      label: "Ethereum",
      data: ethHistoricalValues.map(item => ({
        date: item.time,
        amount: item.open
      }))
    }
  ]

  
  return (
    <Sheet
      component="section"
      variant="outlined" sx={{ flex: "2 3", borderRadius: "sm", p: 1 }}>
      <Chart options={{ data, primaryAxis, secondaryAxes, dark: true }} />
    </Sheet>
  )
}

export default CryptoValuesChart