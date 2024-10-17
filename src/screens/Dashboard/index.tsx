import logo from "../../assets/logo.png";
import { IoPersonCircle } from "react-icons/io5";
import {
  AvatarMenu,
  AvatarOptions,
  Container,
  CreateAppMenu,
  CreateFirstApp,
  DashboardHeader,
  Languages,
  Option,
  PersonalContainer,
  Tech,
  TechnologiesContainer,
} from "./styles";
import { ButtonContainer } from "../../components/Button/styles";
import { IoPersonSharp } from "react-icons/io5";
import { MdExitToApp } from "react-icons/md";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Menu, MenuItem } from "@mui/material";

import { IoMdAdd } from "react-icons/io";
import techs from "../../mocks/techs";

const Dashboard = () => {
  const { t } = useTranslation();
  const [isAvatarMenu, setIsAvatarMenu] = useState(false);

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
        <a href="http://localhost:3000/">
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
              <p>Sair</p>
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
            {t("dashboard.btn_new")}
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
              {t("dashboard.btn_create_app")}
            </MenuItem>
          </Menu>
        </Container>
      </CreateAppMenu>
      <Container>
        <CreateFirstApp>
          <h3>{t("dashboard.create_app")}</h3>
          <p>{t("dashboard.create_app_lore")}</p>
          <ButtonContainer variant="fill">
            {t("dashboard.btn_create_app")}
          </ButtonContainer>
        </CreateFirstApp>
        <Languages>
          <h3>{t("dashboard.techs_title")}</h3>
          <p>{t("dashboard.techs_lore")}</p>
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
