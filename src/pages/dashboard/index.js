import React from 'react';
import { Sheet, Stack, Table, Typography } from '@mui/joy';
import { CurrencyExchangeCalculator } from '../../components';

const DashboardPage = () => {
  return (
    <Stack component="main" width="1000px" spacing={3}>
      <Typography level="h1">CryptoCurrency Dashboard</Typography>

      <Stack direction={"row"} gap={3}>
        <Sheet component="section" variant="outlined" sx={{ flex: "2 3", borderRadius: "sm", p: 1 }}>
          ETC and BTC Charts
        </Sheet>

        <CurrencyExchangeCalculator />
      </Stack>

      <Stack direction="row" justifyContent="space-around">
        <Typography>1 BTC = 3492.93</Typography>
        <Typography>1 ETC = 392.93 USD</Typography>
      </Stack>

      <Stack direction="row" gap={3}>
        <Stack spacing={1}>
          <Typography>Bitcoin - BTC</Typography>
          <Sheet variant="outlined" sx={{ borderRadius: "sm", p: 1 }}>
            <Table>
              <thead>
                <tr>
                  <th style={{ width: '40%' }}>Time</th>
                  <th>USD</th>
                  <th>EUR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2034-03-34 12:30:30</td>
                  <td>40</td>
                  <td>60</td>
                </tr>
              </tbody>
            </Table>
          </Sheet>
        </Stack>
        <Stack spacing={1}>
          <Typography>Btherium - ETH</Typography>
          <Sheet variant="outlined" sx={{ borderRadius: "sm", p: 1 }}>
            <Table>
              <thead>
                <tr>
                  <th style={{ width: '40%' }}>Time</th>
                  <th>USD</th>
                  <th>EUR</th>
                  <th>BTC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2034-03-34 12:30:30</td>
                  <td>40</td>
                  <td>60</td>
                  <td>0.00054</td>
                </tr>
              </tbody>
            </Table>
          </Sheet>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default DashboardPage