import type React from "react";
import { useTranslation } from "react-i18next";
import newAsasImg from "../../assets/newasas.png";
import FeaturesSection from "../../components/FeaturesSection";
import Footer from "../../components/Footer/Footer";
import "../../i18n/index";

import {
  Container,
  TextImageContainer,
  TextContent,
  StyledImage,
  Features,
  LandingPage,
  Heading,
  CtaButton,
} from "./styles";
import Header from "../../components/Header";

const Home: React.FC = () => {
  const { t } = useTranslation();

  const animateButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const button = e.currentTarget;
    button.classList.remove("animate");

    button.offsetWidth;
    button.classList.add("animate");
  };

  return (
    <Container>
      <Header />

      <LandingPage>
        <Heading>{t("header.title")}</Heading>
        <CtaButton onClick={animateButton}>
          {t("buttonHeader.buttonText")}
        </CtaButton>
      </LandingPage>

      <TextImageContainer>
        <TextContent>
          <h2>{t("welcome")}</h2>
          <p>{t("feature.runtime")}</p>
        </TextContent>
        <StyledImage src={newAsasImg} alt="New asas" />
      </TextImageContainer>

      <Features>
        <FeaturesSection
          title={t("feature.operationalExperience")}
          icon="✅"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt quaerat quidem voluptatem numquam praesentium, quasi hic reprehenderit labore rem, deleniti dolor assumenda, facilis architecto qui nam ipsa at dolores consequatur."
        />
        <FeaturesSection
          title={t("feature.operationalExperience")}
          icon="🛠️"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt quaerat quidem voluptatem numquam praesentium, quasi hic reprehenderit labore rem, deleniti dolor assumenda, facilis architecto qui nam ipsa at dolores consequatur."
        />
        <FeaturesSection
          title={t("feature.developerExperience")}
          icon="💻"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt quaerat quidem voluptatem numquam praesentium, quasi hic reprehenderit labore rem, deleniti dolor assumenda, facilis architecto qui nam ipsa at dolores consequatur."
        />
        <FeaturesSection
          title={t("feature.operationalExperience")}
          icon="🔒"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt quaerat quidem voluptatem numquam praesentium, quasi hic reprehenderit labore rem, deleniti dolor assumenda, facilis architecto qui nam ipsa at dolores consequatur."
        />
        <FeaturesSection
          title={t("feature.operationalExperience")}
          icon="📊"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt quaerat quidem voluptatem numquam praesentium, quasi hic reprehenderit labore rem, deleniti dolor assumenda, facilis architecto qui nam ipsa at dolores consequatur."
        />

        <FeaturesSection
          title={t("feature.operationalExperience")}
          icon="⚙️"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt quaerat quidem voluptatem numquam praesentium, quasi hic reprehenderit labore rem, deleniti dolor assumenda, facilis architecto qui nam ipsa at dolores consequatur."
        />
      </Features>

      <section>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          {t("feature.operationalExperience")}
        </h1>
        <Features>
          <FeaturesSection
            title={t("DeploySection.firstCard")}
            icon="🪙"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt quaerat quidem voluptatem numquam praesentium, quasi hic reprehenderit labore rem, deleniti dolor assumenda, facilis architecto qui nam ipsa at dolores consequatur."
          />
          <FeaturesSection
            title={t("DeploySection.SecondCard")}
            icon="👁️‍🗨️"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt quaerat quidem voluptatem numquam praesentium, quasi hic reprehenderit labore rem, deleniti dolor assumenda, facilis architecto qui nam ipsa at dolores consequatur."
          />
          <FeaturesSection
            title={t("DeploySection.thirdCard")}
            icon="💵"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt quaerat quidem voluptatem numquam praesentium, quasi hic reprehenderit labore rem, deleniti dolor assumenda, facilis architecto qui nam ipsa at dolores consequatur."
          />
        </Features>
        <Footer />
      </section>
    </Container>
  );
};

export default Home;
