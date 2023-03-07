import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import AppRoutes from '../router/Routes'
import Header from '../components/Header'

const App = () => (
  <BrowserRouter>
    <Header />
    <AppRoutes />
  </BrowserRouter>
)

export default App
