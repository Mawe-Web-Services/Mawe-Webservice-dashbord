import type React from 'react'
import { Component, type ErrorInfo } from 'react'

interface ErrorBoundaryProps {
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Atualiza o estado para renderizar a próxima vez o fallback UI
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Você pode também registrar o erro em um serviço de erro
    console.error('Erro capturado:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // Você pode renderizar qualquer UI personalizada
      return <h1>Algo deu errado.</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
