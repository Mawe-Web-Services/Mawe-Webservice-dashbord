import styled from 'styled-components'

export const Select = styled.select`
  font-size: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  transition: border-color 0.3s, background-color 0.3s;

  &:focus {
    outline: none;
    border-color: #007bff;
    background-color: #fff;
  }
`
