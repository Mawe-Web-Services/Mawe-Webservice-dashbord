import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, Link } from 'react-router-dom' // Importar useNavigate e Link
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
import { MdMail } from 'react-icons/md'
import { FaLock } from 'react-icons/fa'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'
import useLogin from '../../hooks/useLogin'

const Login = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  type Inputs = {
    email: string
    password: string
  }

  const schema = z.object({
    email: z.string().email({ message: 'Este e-mail está inválido.' }),
    password: z.string(),
  })

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  })

  useEffect(() => {
    setFocus('email')
  }, [setFocus])

  const onSubmit = async (data: Inputs) => {
    const response = await useLogin(data)

    if (response.result && response.result.code === 200) {
      toast.success('Usuário logado com sucesso.')
      reset()
    } else {
      toast.error(
        'Algo deu errado com seu login, confira os campos e tente novamente.'
      )
    }
  }

  return (
    <Container>
      <LoginBox>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <h2>{t('login.title')}</h2>
          <Label>
            {t('login.emailLabel')}
            <InputContainer>
              <MdMail />
              <input
                type="email"
                placeholder={t('login.emailPlaceholder')}
                {...register('email')}
              />
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
                placeholder={t('login.passwordPlaceholder')}
                {...register('password')}
              />
            </InputContainer>
          </Label>
          <Button type="submit">{t('login.loginButton')}</Button>
        </form>
        <Divisor />
        <CreateAccount>
          {t('login.newUser')}
          <Link to="/register">{t('login.registerLink')}</Link>
        </CreateAccount>
      </LoginBox>
      <ForgetPassword href="#">{t('login.forgetPassword')}</ForgetPassword>
    </Container>
  )
}

export default Login
