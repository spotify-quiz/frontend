import React, { useState } from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

function SelectControl2(props) {
  const { label } = props
  const [selectedValue, setSelectedValue] = useState('')

  const handleChange = (event) => {
    setSelectedValue(event.target.value)
  }

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select value={selectedValue} onChange={handleChange} label={label}>
        <MenuItem value="">None</MenuItem>
        {[...Array(20)].map((_, index) => (
          <MenuItem key={index + 1} value={index + 1}>
            {index + 1}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectControl2
