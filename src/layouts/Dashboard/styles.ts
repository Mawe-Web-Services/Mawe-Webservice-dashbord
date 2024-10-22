import styled from "styled-components";
import { themes } from "../../styles/themes";

export const DashboardHeader = styled.header`
  border-bottom: 3px solid ${themes.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  svg {
    font-size: 2.5rem;
    cursor: pointer;
    color: ${themes.colors.primary};
  }

  a {
    width: 80px;
    height: 80px;
    user-select: none;
  }

  img {
    pointer-events: none;
  }
`;

export const AvatarMenu = styled.div`
  position: absolute;
  right: 0;
  background-color: ${themes.colors.white};
  padding: 2rem;
  margin: 0.5rem;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  text-align: center;

  svg {
    font-size: 2.5rem;
    color: ${themes.colors.primary};
  }
`;

export const AvatarOptions = styled.div`
  display: flex;
  margin-top: 1rem;

  svg {
    font-size: 1.5rem;
  }
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${themes.colors.primary};
  border-bottom: 1px solid #eef1f6;
  width: 100%;
  padding-bottom: 0.5rem;
  cursor: pointer;
`;
