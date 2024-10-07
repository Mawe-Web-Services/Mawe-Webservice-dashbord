import styled from 'styled-components'

export const LandingPage = styled.section`
  text-align: center;
  padding: 50px;
  background: linear-gradient(to right, #494592, #5753d7, #494592);
  color: #fff;
`

export const Heading = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: #fff;
`

export const CtaButton = styled.button`
  margin-top: 60px;
  padding: 10px 20px;
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #f8f8f86f;
    transform: scale(1.05);
  }
`
