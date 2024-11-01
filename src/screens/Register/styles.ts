import styled from 'styled-components'
import { themes } from '../../styles/themes'

const { colors } = themes

export const Container = styled.div`
  background: linear-gradient(to bottom, #928fe6, #3731a0);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  h1 {
    text-align: center;
    margin-bottom: 2rem;
    color: ${colors.primary};
    font-weight: 400;
  }

  form {
    background-color: #fff;
    border-radius: 10px;
    padding: 2rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 30%;
    max-width: 100%;
    align-items: center;
    overflow: hidden;

    @media (max-width: 600px) {
      width: 90%;
    }

    @media (min-width: 601px) and (max-width: 800px) {
      width: 80%;
    }

    @media (min-width: 801px) and (max-width: 1000px) {
      width: 70%;
    }
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    padding: 0.6rem; 
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    margin: 0; 

    &:focus {
      border-color: ${colors.primary};
      outline: none;
    }
  }

  span {
    color: red;
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
`

export const Button = styled.button`
  background-color: ${colors.primary};
  color: white;
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
  }
`

export const SelectContainer = styled.div`
  width: 100%;
`
