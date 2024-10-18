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

export const Container = styled.main`
  width: 95%;
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
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background-color: #e7eaee;
  }
`;

export const AppsContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 2rem 1rem;
  padding: 1rem;
  text-align: center;
  line-height: 2.5rem;
  border-radius: 10px;

  h3 {
    color: ${themes.colors.primary};
  }

  @media (max-width: 600px) {
    p {
      font-size: 0.7rem;
    }
  }
`;

export const AllAppsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 1000px) {
    display: block;
  }
`;

export const App = styled.div`
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
  width: 32.4%;
  padding: 1rem;
  border-radius: 10px;
  line-height: normal;
  text-align: left;
  cursor: pointer;

  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 1rem;
  }

  @media (min-width: 801px) and (max-width: 1000px) {
    width: 80%;
    margin: 0.5rem auto;
  }

  @media (min-width: 1001px) and (max-width: 1200px) {
    width: 70%;
    margin: 0.5rem auto;
  }

`;

export const AppInformations = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  img {
    width: 40px;
    border-radius: 50px;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
`;

export const GithubInformations = styled.div`
  background-color: ${themes.colors.primary};
  color: ${themes.colors.white};
  padding: 0.5rem;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
  width: max-content;

  svg {
    font-size: 20px;
  }
`;

export const AppGitInformations = styled.div`
  span {
    display: block;
    color: gray;
  }

  .branch-name {
    display: inline;
    color: ${themes.colors.black};
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
