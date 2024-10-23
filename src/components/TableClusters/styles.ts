import styled from "styled-components";
import { themes } from "../../styles/themes";

export const ClusterTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 160%;
`;

export const ClusterHeaderRow = styled.div`
  display: flex;
  font-weight: bold;
`;

export const ClusterCell = styled.div`
  flex: 1;
  padding: 8px;
`;

export const ClusterRow = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e6e8eb;
  border-radius: 5px;
  padding: 0.8rem;

  button {
    background-color: ${themes.colors.primary};
    color: ${themes.colors.white};
    border: 0;
    padding: 1rem;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }
`;
