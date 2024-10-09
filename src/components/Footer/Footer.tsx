import type React from 'react'
import { useTranslation } from 'react-i18next'
import {
  FooterContainer,
  FooterTitle,
  FooterText,
  SocialLinks,
} from './FooterStyles'

const Footer: React.FC = () => {
  const { t } = useTranslation()

  return (
    <FooterContainer>
      <FooterTitle>{t('footer.title')}</FooterTitle>
      <FooterText>{t('footer.contact')}</FooterText>
      <FooterText>{t('footer.credit')}</FooterText>
      <SocialLinks>
        <a
          href="https://www.linkedin.com/company/105147342/admin/analytics/visitors/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Mawe-Web-Services"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://wa.me/yourphonenumber"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </SocialLinks>
    </FooterContainer>
  )
}

export default Footer
