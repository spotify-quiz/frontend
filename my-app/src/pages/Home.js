import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SelectControl from '../components/SelectControl'
import SelectControl2 from '../components/SelectControl2'
function Home() {
  const [options, setOptions] = useState([])

  useEffect(() => {
    axios
      .get('https://example.com/options')
      .then((response) => {
        setOptions(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <h1>Welcome to the Home page</h1>
      <SelectControl label="Select an option" options={options} />
      <SelectControl2 label="Select an option" options={options} />
    </div>
  )
}

export default Home
