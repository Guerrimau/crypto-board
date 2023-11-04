import React, { useEffect, useState } from 'react'
import { Sheet, Table } from '@mui/joy'

const CryptoValuesTable = ({ currentValues, currencies = ["USD"] }) => {
  const [historicalValues, setHistoricalValues] = useState([]);

  const addNewValue = (value) => {
    let newHistoricalValues = historicalValues;
    if(newHistoricalValues.length === 5) {
      newHistoricalValues = newHistoricalValues.slice(1)
    } 

    const newElement = {
      ...value,
      time: new Date()
    }

    newHistoricalValues = [newElement, ...newHistoricalValues];
    setHistoricalValues(newHistoricalValues);
  }

  useEffect(() => {
    if(currentValues) {
      addNewValue(currentValues);
    }
  }, [currentValues]);

  return (
    <Sheet variant="outlined" sx={{ borderRadius: "sm", p: 1 }}>
      <Table>
        <thead>
          <tr>
            <th style={{ width: '40%' }}>Time</th>
            {currencies.map(currency => (
              <th key={currency}>{currency}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {historicalValues.map(value => (
            <tr key={value.time}>
              <td>{value.time.toLocaleString()}</td>
              {currencies.map(currency => (
                <td>{value[currency]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Sheet>
  )
}

export default CryptoValuesTable