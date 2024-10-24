import type React from 'react'
import { useTranslation } from 'react-i18next'
import { BrowserRouter, useLocation } from 'react-router-dom'
import AppRoutes from './Routes/routes'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
