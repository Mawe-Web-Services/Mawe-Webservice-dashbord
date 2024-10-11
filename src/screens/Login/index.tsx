import {
  Button,
  Container,
  Divisor,
  CreateAccount,
  InputContainer,
  Label,
  LoginBox,
  ForgetPassword,
} from './styles'

import { MdMail } from 'react-icons/md'
import { FaLock } from 'react-icons/fa'
import '../../i18n/index'
import { useTranslation } from 'react-i18next'

const Login = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <LoginBox>
        <form noValidate>
          <h2>{t('login.title')}</h2>
          <Label>
            {t('login.emailLabel')}
            <InputContainer>
              <MdMail />
              <input type="email" placeholder={t('login.emailPlaceholder')} />
            </InputContainer>
          </Label>
          <Label>
            {t('login.passwordLabel')}
            <InputContainer>
              <FaLock />
              <input
                type="password"
                placeholder={t('login.passwordPlaceholder')}
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
