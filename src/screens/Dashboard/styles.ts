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
`;

export const Container = styled.main`
  width: 90%;
  margin: 0 auto;
`;

export const CreateAppMenu = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${themes.colors.borderColor};
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
`;

export const PersonalContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${themes.colors.primary};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 3px;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background-color: #e7eaee;
  }
`;

export const CreateFirstApp = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 2rem 1rem;
  padding: 1rem;
  text-align: center;
  line-height: 2.5rem;
  border-radius: 10px;

  h3 {
    color: ${themes.colors.primary};
  }
`;
