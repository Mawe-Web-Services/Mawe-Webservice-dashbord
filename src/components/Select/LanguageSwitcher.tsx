import type React from 'react'
import { useTranslation } from 'react-i18next'
import { Select } from './LanguageSwitcherStyles'
const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation()

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <Select onChange={handleLanguageChange} defaultValue={i18n.language}>
      <option value="en">English</option>
      <option value="pt">Português</option>
    </Select>
  )
}

export default LanguageSwitcher
