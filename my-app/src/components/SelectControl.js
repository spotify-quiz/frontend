import React, { useState, useEffect } from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import axios from 'axios'

function SelectControl(props) {
  const { label, url } = props
  const [options, setOptions] = useState([])
  const [selectedValue, setSelectedValue] = useState('')

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setOptions(response.data)
      })
      .catch((error) => {
        console.error('Error fetching options:', error)
      })
  }, [url])

  const handleChange = (event) => {
    setSelectedValue(event.target.value)
  }

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select value={selectedValue} onChange={handleChange} label={label}>
        {options.length === 0 && <MenuItem value="">None</MenuItem>}
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectControl
