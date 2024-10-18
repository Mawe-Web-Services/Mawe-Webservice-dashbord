import logo from "../../assets/logo.png";
import { IoPersonCircle } from "react-icons/io5";
import {
  AvatarMenu,
  AvatarOptions,
  Container,
  CreateAppMenu,
  AppsContainer,
  DashboardHeader,
  Languages,
  Option,
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
import { MdExitToApp } from "react-icons/md";

import { Trans, useTranslation } from "react-i18next";
import { useState } from "react";
import { Menu, MenuItem } from "@mui/material";

import { IoMdAdd } from "react-icons/io";
import techs from "../../mocks/techs";
import { useLocation } from "react-router-dom";
import { FaCodeBranch, FaGithub } from "react-icons/fa";
import apps from "../../mocks/apps";

const Dashboard = () => {
  const { t } = useTranslation();
  const [isAvatarMenu, setIsAvatarMenu] = useState(false);

  const { pathname } = useLocation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <DashboardHeader>
        <a href={`http://localhost:3000${pathname}`}>
          <img src={logo} alt="Logo" width={80} />
        </a>
        <IoPersonCircle onClick={() => setIsAvatarMenu(!isAvatarMenu)} />
      </DashboardHeader>

      {isAvatarMenu && (
        <AvatarMenu>
          <IoPersonCircle />
          <h4>Gabriel Santos</h4>
          <p>gabriel.oliveira2040@hotmail.com</p>
          <AvatarOptions>
            <Option>
              <MdExitToApp />
              <p>{t("dashboard.logout")}</p>
            </Option>
          </AvatarOptions>
        </AvatarMenu>
      )}

      <CreateAppMenu>
        <Container style={{ display: "flex", justifyContent: "space-between" }}>
          <PersonalContainer>
            <IoPersonSharp />
            <span>{t("dashboard.personal")}</span>
          </PersonalContainer>
          <ButtonContainer
            variant="normal"
            id="new-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            {t("dashboard.btnNew")}
          </ButtonContainer>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "new-button",
            }}
            style={{ left: "-5%" }}
          >
            <MenuItem onClick={handleClose} style={{ fontSize: 15 }}>
              <IoMdAdd style={{ marginRight: 5 }} size={20} />
              {t("dashboard.btnCreateApp")}
            </MenuItem>
          </Menu>
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
                    <Trans t={t} i18nKey={"appTimeAgo"}>
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
