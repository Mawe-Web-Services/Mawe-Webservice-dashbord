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

  @media(max-width: 600px) {
    p {
      font-size: 0.7rem;
    }
  }
`;

export const Languages = styled.div`
  text-align: center;
  line-height: 2rem;

  h3 {
    color: #475366;
    font-size: 1rem;
  }
`;

export const TechnologiesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
  padding-bottom: 2rem;
`;

export const Tech = styled.div`
  line-height: 1.3rem;
  text-align: center;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
  padding: 1rem 2rem;
  border-radius: 10px;
  cursor: pointer;

  span {
    display: block;
  }

  svg {
    font-size: 2rem;
    color: #a6b1c1;
  }
`;
