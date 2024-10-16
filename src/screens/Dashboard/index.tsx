import logo from "../../assets/logo.png";
import { IoPersonCircle } from "react-icons/io5";
import {
  Container,
  CreateAppMenu,
  CreateFirstApp,
  DashboardHeader,
  Languages,
  PersonalContainer,
  Tech,
  TechnologiesContainer,
} from "./styles";
import { ButtonContainer } from "../../components/Button/styles";
import { IoPersonSharp } from "react-icons/io5";

import { DiRuby, DiClojure, DiScala } from "react-icons/di";
import { FaPhp, FaNodeJs, FaPython, FaJava } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Menu, MenuItem } from "@mui/material";

import { IoMdAdd } from "react-icons/io";

const Dashboard = () => {
  const { t } = useTranslation();

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
        <img src={logo} alt="logo" width={80} />
        <IoPersonCircle />
      </DashboardHeader>
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
            <MenuItem onClick={handleClose} style={{fontSize: 15}}>
              <IoMdAdd style={{marginRight: 5}} size={20} />
              Criar novo app
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
            <Tech>
              <DiRuby />
              <span>Ruby</span>
            </Tech>
            <Tech>
              <FaPhp />
              <span>PHP</span>
            </Tech>
            <Tech>
              <FaNodeJs />
              <span>Node.js</span>
            </Tech>
            <Tech>
              <FaPython />
              <span>Python</span>
            </Tech>
            <Tech>
              <FaJava />
              <span>Java</span>
            </Tech>
            <Tech>
              <FaGolang />
              <span>Go</span>
            </Tech>
            <Tech>
              <DiClojure />
              <span>Clojure</span>
            </Tech>
            <Tech>
              <DiScala />
              <span>Scala</span>
            </Tech>
          </TechnologiesContainer>
        </Languages>
      </Container>
    </div>
  );
};

export default Dashboard;
