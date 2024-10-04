import styled from "styled-components";
import { themes } from "../../styles/themes";

const { colors } = themes;

export const Container = styled.div`
  background: linear-gradient(to bottom, #928fe6, #3731a0);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginBox = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 30%;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: ${colors.primary};
    font-weight: 400;
  }

  form {
    padding: 2rem;
  }

  @media (max-width: 600px) {
    width: 90%;
  }

  @media (min-width: 601px) and (max-width: 800px) {
    width: 80%;
  }

  @media (min-width: 801px) and (max-width: 1000px) {
    width: 70%;
  }
`;

export const InputContainer = styled.div`
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  border-radius: 5px;

  svg {
    color: ${colors.primary};
    font-size: 1rem;
    margin: 0 0.5rem;
  }
`;

export const Label = styled.label`
  display: block;
  margin-top: 2rem;

  input {
    width: 85%;
    padding: 0.8rem;
    border: 0;

    &:focus {
      outline: none;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 5px;
  border: 0;
  background-color: ${colors.primary};
  cursor: pointer;
  color: ${colors.white};
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
`;

export const Divisor = styled.div`
  border: 0.1px solid #dddddd;
`;

export const CreateAccount = styled.span`
  display: block;
  text-align: center;
  padding: 1.5rem;

  a {
    color: ${colors.primary};
  }
`;

export const ForgetPassword = styled.a`
  color: ${colors.white};
  margin-top: 1rem;
`;
