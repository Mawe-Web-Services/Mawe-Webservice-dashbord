import {
  Button,
  Container,
  Divisor,
  CreateAccount,
  InputContainer,
  Label,
  LoginBox,
  ForgetPassword,
} from "./styles";

import { MdMail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <Container>
      <LoginBox>
        <form noValidate>
          <h2>Logar na sua conta</h2>
          <Label>
            Endereço de e-mail
            <InputContainer>
              <MdMail />
              <input type="email" placeholder="Endereço de e-mail" />
            </InputContainer>
          </Label>
          <Label>
            Senha
            <InputContainer>
              <FaLock />
              <input type="password" placeholder="Senha" />
            </InputContainer>
          </Label>
          <Button>Logar</Button>
        </form>
        <Divisor />
        <CreateAccount>
          Novo na MWS? <a href="#">Registrar</a>
        </CreateAccount>
      </LoginBox>
      <ForgetPassword href="#">Esqueceu sua senha?</ForgetPassword>
    </Container>
  );
};

export default Login;
