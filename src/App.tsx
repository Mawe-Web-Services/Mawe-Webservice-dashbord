import type React from 'react'
import styles from './App.module.css'
import Header from './components/Header'
import Home from './screens/Home'

const App: React.FC = () => {
  const animateButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const button = e.currentTarget
    button.classList.remove('animate')

    void button.offsetWidth
    button.classList.add('animate')
  }

  return (
    <div className="App">
      <Header />
      <section className={styles.landingPage}>
        <h1>"MWS: A nuvem que impulsiona o seu futuro."</h1>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button className={styles.ctaButton} onClick={animateButton}>
          See how MWS works
        </button>
      </section>
      <Home />
    </div>
  )
}

export default App
