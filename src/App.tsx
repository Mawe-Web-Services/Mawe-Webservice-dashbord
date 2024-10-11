import type React from 'react'
import { useTranslation } from 'react-i18next'
import Header from './components/Header'
import Home from './screens/Home'

import { LandingPage, Heading, CtaButton } from './AppStyles'

const App: React.FC = () => {
  const { t } = useTranslation()

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
        <Heading>{t('header.title')}</Heading>
        <CtaButton onClick={animateButton}>
          {t('buttonHeader.buttonText')}
        </CtaButton>
      </LandingPage>
      <Home />
    </div>
  )
}

export default App
