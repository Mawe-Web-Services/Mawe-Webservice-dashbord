import { Outlet, useLocation } from "react-router-dom";
import { AvatarMenu, AvatarOptions, DashboardHeader, Option } from "./styles";
import { IoPersonCircle } from "react-icons/io5";
import { IReturn } from "../../remote/remote";
import useMe, { IMeReturn } from "../../hooks/useMe";
import { useEffect, useState } from "react";
import { MdExitToApp } from "react-icons/md";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.png";

const DashboardLayout = () => {
  const [isAvatarMenu, setIsAvatarMenu] = useState(false);
  const [me, setMe] = useState<IReturn<IMeReturn>>();
  const { t } = useTranslation();
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchMe = async () => {
      const me = await useMe({ email: "gabriel.oliveira2040@hotmail.com" });

      setMe(me);
    };

    fetchMe();
  }, []);

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
          <h4>{me?.result.username}</h4>
          <p>{me?.result.email}</p>
          <AvatarOptions>
            <Option>
              <MdExitToApp />
              <p>{t("dashboard.logout")}</p>
            </Option>
          </AvatarOptions>
        </AvatarMenu>
      )}

      <Outlet />
    </div>
  );
};

export default DashboardLayout;
