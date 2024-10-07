import styled from 'styled-components'

export const FeaturesSection = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 50px;
  background-color: #fff;
`

export const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  text-align: center;
  padding: 20px;
  border: 1px solid #e1e1e1;
  border-radius: 10px; 
  background-color: #f9f9f9; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  transition: transform 0.3s; 

  &:hover {
    transform: translateY(-5px); 
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
  }
`

export const FeatureIcon = styled.div`
  font-size: 40px;
  margin-bottom: 20px;
  color: #6c63ff;
`

export const FeatureTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 700;
  color: #333;
`

export const FeatureDescription = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.6;
`
