import type React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../screens/Home/index'
import Login from '../screens/Login/index'
import Register from '../screens/Register/index'
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import NotFound from '../screens/NotFound/notFound'

const AppRoutes: React.FC = () => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </ErrorBoundary>
  )
}

export default AppRoutes
