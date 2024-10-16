import styled from "styled-components";

export const Container = styled.div``;

export const LandingPage = styled.section`
  text-align: center;
  padding: 50px;
  background: linear-gradient(to right, #494592, #5753d7, #494592);
  color: #fff;
`;

export const Heading = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: #fff;
`;

export const TextImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
`;

export const TextContent = styled.div`
  h2 {
    margin-left: 100px;
    font-size: 28px;
    margin-bottom: 20px;
    color: #000;
  }

  p {
    font-size: 17px;
    line-height: 1.6;
    color: #000;
    max-width: 500px;
    margin-left: 20%;
  }
`;

export const StyledImage = styled.img`
  margin-right: 15%;
  max-width: 400px;
  border-radius: 10px;
`;

export const Features = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

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
`;
