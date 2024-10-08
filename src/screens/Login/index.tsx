import {
  Button,
  Container,
  Divisor,
  CreateAccount,
  InputContainer,
  Label,
  LoginBox,
  ForgetPassword,
  ErrorText,
} from "./styles";

import { MdMail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "../../services/api-types";
import { APIService } from "../../services/api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useEffect } from "react";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const schema = z.object({
    email: z.string().email({ message: "Este e-mail está inválido." }),
    password: z
      .string()
      .trim()
      .min(8, { message: "A senha é preciso ter, pelo menos, 8 caracteres." }),
  });

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  const onSubmit: SubmitHandler<Inputs> = async (data: User) => {
    const loginData = await APIService.loginUser(data);

    if (loginData.code === 200) {
      toast.success("Usuário logado com sucesso.");
      setFocus("email");
      reset();
    } else {
      toast.error(
        "Algo deu errado com seu login, confira os campos e tente novamente."
      );
    }
  };

  return (
    <Container>
      <LoginBox>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <h2>Logar na sua conta</h2>
          <Label>
            Endereço de e-mail
            <InputContainer>
              <MdMail />
              <input
                type="email"
                placeholder="Endereço de e-mail"
                {...register("email")}
              />
            </InputContainer>
            {errors.email?.message && (
              <ErrorText>{errors.email?.message}</ErrorText>
            )}
          </Label>
          <Label>
            Senha
            <InputContainer>
              <FaLock />
              <input
                type="password"
                placeholder="Senha"
                {...register("password")}
              />
            </InputContainer>
            {errors.password?.message && (
              <ErrorText>{errors.password?.message}</ErrorText>
            )}
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
