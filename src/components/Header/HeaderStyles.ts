import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: linear-gradient(to right, #494592, #5753d7, #494592);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
`

export const Navigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: center;
      margin-right: 20px;
      height: 40px; 
      
      a {
        text-decoration: none;
        color: #f9f9f9;
        font-size: 16px;
      }
    }
  }
`
