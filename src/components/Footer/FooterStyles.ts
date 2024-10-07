// FooterStyles.ts
import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%; /* Garante que o footer ocupe 100% da largura da tela */
  text-align: center;
  padding: 20px;
  background: linear-gradient(to right, #494592, #5753d7);
  color: #fff;

`

export const FooterTitle = styled.h1`
  font-size: 24px;
  

`

export const FooterText = styled.p`
  margin: 10px 0;
  font-size: 16px;
  
`

export const SocialLinks = styled.div`
  margin-top: 10px;

  a {
    color: #fff;
    margin: 0 10px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`
