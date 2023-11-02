import { Sheet, Table } from '@mui/joy'
import React from 'react'

const CryptoValuesTable = () => {
  return (
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
  )
}

export default CryptoValuesTable