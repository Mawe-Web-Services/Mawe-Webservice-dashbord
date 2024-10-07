import { useState, useTransition } from 'react'
import newAsasImg from '../../assets/newasas.png'
import FeaturesSection from '../../components/FeaturesSection'
import Footer from '../../components/Footer/Footer'

import {
  Container,
  TextImageContainer,
  TextContent,
  StyledImage,
  Features,
} from './HomeStyles'

const Home = () => {
  return (
    <Container>
      <TextImageContainer>
        <TextContent>
          <p>
            <h2>A PLATAFORMA MWS</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla.
          </p>
        </TextContent>
        <StyledImage src={newAsasImg} alt="New asas" />
      </TextImageContainer>

      <Features>
        <FeaturesSection
          title="MWS Runtime"
          icon="🛠️"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
            commodi dicta cupiditate. Reprehenderit maxime eveniet molestias
            corrupti saepe non? In assumenda alias ut beatae ratione minus,
            praesentium accusantium nihil provident."
        />
        <FeaturesSection
          title="MWS Developer Experience"
          icon="💻"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
            commodi dicta cupiditate. Reprehenderit maxime eveniet molestias
            corrupti saepe non? In assumenda alias ut beatae ratione minus,
            praesentium accusantium nihil provident."
        />
        <FeaturesSection
          title="Security and Compliance"
          icon="🔒"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
            commodi dicta cupiditate. Reprehenderit maxime eveniet molestias
            corrupti saepe non? In assumenda alias ut beatae ratione minus,
            praesentium accusantium nihil provident."
        />
        <FeaturesSection
          title="Data Services and Ecosystem"
          icon="👁️‍🗨️"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
            commodi dicta cupiditate. Reprehenderit maxime eveniet molestias
            corrupti saepe non? In assumenda alias ut beatae ratione minus,
            praesentium accusantium nihil provident."
        />
        <FeaturesSection
          title="MWS Operational Experience OpEx"
          icon="📖"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
            commodi dicta cupiditate. Reprehenderit maxime eveniet molestias
            corrupti saepe non? In assumenda alias ut beatae ratione minus,
            praesentium accusantium nihil provident."
        />
        <FeaturesSection
          title="MWS Operational Experience OpEx"
          icon="✅"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
            commodi dicta cupiditate. Reprehenderit maxime eveniet molestias
            corrupti saepe non? In assumenda alias ut beatae ratione minus,
            praesentium accusantium nihil provident."
        />
      </Features>
      <section>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>
          Deploy Section
        </h1>
        <Features>
          <FeaturesSection
            title="Data Services and Ecosystem"
            icon="💵"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
      commodi dicta cupiditate. Reprehenderit maxime eveniet molestias
      corrupti saepe non? In assumenda alias ut beatae ratione minus,
      praesentium accusantium nihil provident."
          />
          <FeaturesSection
            title="MWS Operational Experience OpEx"
            icon="🪙"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
      commodi dicta cupiditate. Reprehenderit maxime eveniet molestias
      corrupti saepe non? In assumenda alias ut beatae ratione minus,
      praesentium accusantium nihil provident."
          />
          <FeaturesSection
            title="MWS Operational Experience OpEx"
            icon="🌍"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
      commodi dicta cupiditate. Reprehenderit maxime eveniet molestias
      corrupti saepe non? In assumenda alias ut beatae ratione minus,
      praesentium accusantium nihil provident."
          />
        </Features>
        <Footer />
      </section>
    </Container>
  )
}

export default Home
