import type React from 'react'
import { useTranslation } from 'react-i18next'
import { HeaderContainer, Logo, Navigation } from './HeaderStyles'
import { ReactComponent as ReactLogo } from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import LanguageSwitcher from '../Select/LanguageSwitcher'

const Header: React.FC = () => {
  const { t } = useTranslation()

  return (
    <HeaderContainer>
      <Logo>
        <ReactLogo width={40} height={40} />
      </Logo>
      <Navigation>
        <ul>
          <LanguageSwitcher />
          <li>
            <a href="#link1">{t('header.products')}</a>
          </li>
          <li>
            <a href="#link2">{t('header.docs')}</a>
          </li>
          <li>
            <a href="#link3">{t('header.support')}</a>
          </li>

          <li>
            <Link to={'/login'}>{t('header.login')}</Link>
          </li>
        </ul>
      </Navigation>
    </HeaderContainer>
  )
}

export default Header
