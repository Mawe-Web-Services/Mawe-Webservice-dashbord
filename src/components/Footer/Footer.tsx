// Footer.tsx
import type React from 'react'
import {
  FooterContainer,
  FooterTitle,
  FooterText,
  SocialLinks,
} from './FooterStyles'

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterTitle>Nice to see you here</FooterTitle>
      <FooterText>Contact: my-email@example.com</FooterText>
      <FooterText>Made with love © 2024 Mawe Web Service</FooterText>
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
