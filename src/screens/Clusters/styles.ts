import styled from "styled-components";
import { themes } from "../../styles/themes";

export const Container = styled.div`
  padding: 3rem;

  h1,
  p {
    text-align: center;
  }

  main {
    display: flex;
    align-items: start;
    gap: 2rem;
    width: 95%;
    margin: 3rem auto;
  }

  @media (max-width: 800px) {
    main {
      flex-wrap: wrap-reverse;
    }
  }
`;

export const TotalClusters = styled.div`
  border: 1px solid #e6e8eb;
  padding: 1rem;
  border-radius: 10px;
  width: 20%;
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  span {
    display: block;
  }

  .total-clusters {
    font-weight: bold;
    font-size: 1.5rem;
  }

  .total-header {
    margin-bottom: 1rem;
  }

  .total-percentage {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .used {
    background-color: ${themes.colors.primary};
    width: 15px;
    height: 10px;
    border-radius: 5px;
  }

  .available {
    background-color: #a19cff;
    width: 15px;
    height: 10px;
    border-radius: 5px;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;