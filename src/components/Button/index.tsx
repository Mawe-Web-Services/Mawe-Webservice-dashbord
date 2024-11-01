import { ReactNode } from "react";
import { ButtonContainer } from "./styles";

type ButtonProps = {
  children: ReactNode;
  variant: 'normal' | 'fill';
};

const Button = ({ children, variant }: ButtonProps) => {
  return <ButtonContainer variant={variant}>{children}</ButtonContainer>;
};

export default Button;
