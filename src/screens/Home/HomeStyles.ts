import styled from 'styled-components'

export const Container = styled.div`
`

export const TextImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
`

export const TextContent = styled.div`
  h2 {
    margin-left: 100px;
    font-size: 28px;
    margin-bottom: 20px;
    color: #000;
  }

  p {
    font-size: 17px;
    line-height: 1.6;
    color: #000;
    max-width: 500px;
    margin-left: 20%;
  }
`

export const StyledImage = styled.img`
  margin-right: 15%;
  max-width: 400px;
  border-radius: 10px;
`

export const Features = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
