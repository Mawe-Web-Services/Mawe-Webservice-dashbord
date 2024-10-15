import styled, { css } from "styled-components";
import { themes } from "../../styles/themes";

type ButtonContainerProps = {
  variant: "normal" | "fill";
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: 0.2s;
  ${(props) =>
    props.variant === "normal"
      ? `
    ${css`
      background-color: #ffffff;
      border: 1px solid ${themes.colors.primary};
      color: ${themes.colors.primary};

      &:hover {
        background-color: rgba(73, 69, 146, 0.3);
      }
    `}`
      : `
     ${css`
       background-color: #494592;
       border: 1px solid ${themes.colors.primary};
       color: #ffffff;
       opacity: 0.8;

       &:hover {
            opacity: 1;
       }
     `}
     `}
`;
