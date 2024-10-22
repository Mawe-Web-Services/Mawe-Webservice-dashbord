import logo from "../../assets/logo.png";
import {
  Container,
  CreateAppMenu,
  AppsContainer,
  Languages,
  PersonalContainer,
  Tech,
  TechnologiesContainer,
  App,
  AppInformations,
  GithubInformations,
  AppGitInformations,
  AllAppsContainer,
} from "./styles";
import { ButtonContainer } from "../../components/Button/styles";
import { IoPersonSharp } from "react-icons/io5";

import { Trans, useTranslation } from "react-i18next";
import techs from "../../mocks/techs";
import { FaCodeBranch, FaGithub } from "react-icons/fa";
import apps from "../../mocks/apps";

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <div>
      <CreateAppMenu>
        <Container style={{ display: "flex", justifyContent: "space-between" }}>
          <PersonalContainer>
            <IoPersonSharp />
            <span>{t("dashboard.personal")}</span>
          </PersonalContainer>
          <ButtonContainer variant="normal">
            {t("dashboard.btnNew")}
          </ButtonContainer>
        </Container>
      </CreateAppMenu>
      <Container>
        <AppsContainer>
          {/* <h3>{t("dashboard.createApp")}</h3>
          <p>{t("dashboard.createAppLore")}</p>
          <ButtonContainer variant="fill">
            {t("dashboard.btnCreateApp")}
          </ButtonContainer> */}
          <AllAppsContainer>
            {apps.map((app) => (
              <App key={app.id}>
                <AppInformations>
                  <img src={logo} alt="app-logo" />
                  <div>
                    <p>{app.name}</p>
                    <p>{app.link}</p>
                  </div>
                </AppInformations>
                <GithubInformations>
                  <FaGithub />
                  <span>{app.gitRepo}</span>
                </GithubInformations>
                <AppGitInformations>
                  <span>{app.commit}</span>
                  <span>
                    <Trans t={t} i18nKey={"dashboard.appTimeAgo"}>
                      {{
                        leftText: `${app.time}${t(
                          `timeUnit.${app.timeUnity}`
                        )} ago on`,
                      }}{" "}
                      <FaCodeBranch /> {{ rightText: app.branch }}
                    </Trans>
                  </span>
                </AppGitInformations>
              </App>
            ))}
          </AllAppsContainer>
        </AppsContainer>
        <Languages>
          <h3>{t("dashboard.techsTitle")}</h3>
          <p>{t("dashboard.techsLore")}</p>
          <TechnologiesContainer>
            {techs.map((tech) => (
              <Tech key={tech.id}>
                <tech.icon />
                <span>{tech.name}</span>
              </Tech>
            ))}
          </TechnologiesContainer>
        </Languages>
      </Container>
    </div>
  );
};

export default Dashboard;
