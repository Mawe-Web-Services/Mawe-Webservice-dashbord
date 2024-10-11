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
} from './styles'
import '../../i18n/index'
import { useTranslation } from 'react-i18next'

const Login = () => {
  
const { t } = useTranslation()

import { MdMail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RemoteService } from "../../remote/remote";
import { toast } from "react-toastify";
import { useEffect } from "react";
import useLogin from "../../hooks/useLogin";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const schema = z.object({
    email: z.string().email({ message: "Este e-mail está inválido." }),
    password: z.string(),
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

  const onSubmit: SubmitHandler<Inputs> = async (data) => {

    const response = await useLogin(data);

    if (response.result && response.result.code === 200) {
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
        <form noValidate>
          <h2>{t('login.title')}</h2>
          <Label>
            {t('login.emailLabel')}
            <InputContainer>
              <MdMail />
              <input type="email" placeholder={t('login.emailPlaceholder')} {...register("email")} />

            </InputContainer>
            {errors.email?.message && (
              <ErrorText>{errors.email?.message}</ErrorText>
            )}
          </Label>
          <Label>
            {t('login.passwordLabel')}
            <InputContainer>
              <FaLock />
              <input
                type="password"
                placeholder={t('login.passwordPlaceholder') 
                {...register("password")}}
               
              />
            </InputContainer>
          </Label>
          <Button>{t('login.loginButton')}</Button>
        </form>
        <Divisor />
        <CreateAccount>
          {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
          {t('login.newUser')} <a href="#">{t('login.registerLink')}</a>
        </CreateAccount>
      </LoginBox>
      <ForgetPassword href="#">{t('login.forgetPassword')}</ForgetPassword>
    </Container>
  )
}

export default Login
