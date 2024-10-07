import type React from 'react'
import {
  FeaturesSection as StyledFeaturesSection,
  FeatureItem as StyledFeatureItem,
  FeatureIcon as StyledFeatureIcon,
  FeatureTitle as StyledFeatureTitle,
  FeatureDescription as StyledFeatureDescription,
} from './FeaturesSectionStyles'

type FeaturesSectionProps = {
  title: string
  icon: string
  text: string
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  title,
  icon,
  text,
}) => {
  return (
    <StyledFeaturesSection>
      <StyledFeatureItem>
        <StyledFeatureIcon>{icon}</StyledFeatureIcon>
        <StyledFeatureTitle>{title}</StyledFeatureTitle>
        <StyledFeatureDescription>{text}</StyledFeatureDescription>
      </StyledFeatureItem>
    </StyledFeaturesSection>
  )
}

export default FeaturesSection
