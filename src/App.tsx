import type React from 'react'
import Header from './components/Header'
import Home from './screens/Home'

import { LandingPage, Heading, CtaButton } from './AppStyles'

const App: React.FC = () => {
  const animateButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const button = e.currentTarget
    button.classList.remove('animate')

    button.offsetWidth
    button.classList.add('animate')
  }

  return (
    <div className="App">
      <Header />

      <LandingPage>
        <Heading>"MWS: A nuvem que impulsiona o seu futuro."</Heading>
        <CtaButton onClick={animateButton}>See how MWS works</CtaButton>
      </LandingPage>
      <Home />
    </div>
  )
}

export default App
