import type React from 'react'
import './App.css'
import { ReactComponent as ReactLogo } from './assets/logo.svg'
import newAsasImg from './assets/newasas.png'

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
      <header className="header">
        <div className="logo">
          <ReactLogo width={40} height={40} />
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <a href="#link1">Products</a>
            </li>
            <li>
              <a href="#link2">Docs</a>
            </li>
            <li>
              <a href="#link3">Support</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="landing-page">
        <h1>"MWS: A nuvem que impulsiona o seu futuro."</h1>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button className="cta-button bubbly-button" onClick={animateButton}>
          See how MWS works
        </button>
      </section>

      <div className="text-image-container">
        <div>
          <p>
            <h2>A PLATAFORMA MWS</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla.
          </p>
        </div>
        <img src={newAsasImg} alt="New asas" className="newasas-image" />
      </div>

      <section className="features-section">
        <div className="feature-item">
          <div className="feature-icon">🛠️</div>
          <h3>MWS Runtime</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
            commodi dicta cupiditate. Reprehenderit maxime eveniet molestias
            corrupti saepe non? In assumenda alias ut beatae ratione minus,
            praesentium accusantium nihil provident.
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">💻</div>
          <h3>MWS Developer Experience</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat et
            molestiae nobis, possimus voluptatum architecto hic illum eveniet
            quam temporibus laborum dignissimos quas nesciunt vitae ipsa minima
            culpa veniam impedit.
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🔒</div>
          <h3>Security and Compliance</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            harum aut architecto aspernatur iure placeat adipisci, corrupti
            tempora vel sequi porro corporis incidunt mollitia quod ducimus,
            soluta sint eligendi! Animi!
          </p>
        </div>
      </section>

      <section className="features-section">
        <div className="feature-item">
          <div className="feature-icon">👁️‍🗨️</div>
          <h3>Data Services and Ecosystem</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
            commodi dicta cupiditate. Reprehenderit maxime eveniet molestias
            corrupti saepe non? In assumenda alias ut beatae ratione minus,
            praesentium accusantium nihil provident.
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">📖</div>
          <h3>MWS Operational Experience OpEx</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat et
            molestiae nobis, possimus voluptatum architecto hic illum eveniet
            quam temporibus laborum dignissimos quas nesciunt vitae ipsa minima
            culpa veniam impedit.
          </p>
        </div>
      </section>
    </div>
  )
}

export default App
