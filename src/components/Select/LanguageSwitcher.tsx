import type React from 'react'
import { useTranslation } from 'react-i18next'
import Select, { components } from 'react-select'
import { customStyles } from './LanguageSwitcherStyles'
import flagUsa from '../../assets/usa.png'
import flagBr from '../../assets/brazil.png'
import globe from '../../assets/globe.png'

interface LanguageOption {
  value: string
  label: JSX.Element
}

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation()

  const options: LanguageOption[] = [
    {
      value: 'en',
      label: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={flagUsa}
            alt="USA Flag"
            style={{ width: '20px', marginRight: '8px' }}
          />
          English
        </div>
      ),
    },
    {
      value: 'pt',
      label: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={flagBr}
            alt="Brazil Flag"
            style={{ width: '20px', marginRight: '8px' }}
          />
          Português
        </div>
      ),
    },
  ]

  const handleLanguageChange = (selectedOption: LanguageOption | null) => {
    if (selectedOption) {
      i18n.changeLanguage(selectedOption.value)
    }
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const DropdownIndicator = (props: any) => {
    return (
      <components.DropdownIndicator {...props}>
        <img
          src={globe}
          alt="Globe"
          style={{ width: '20px', marginRight: '10px' }}
        />
      </components.DropdownIndicator>
    )
  }

  return (
    <Select
      defaultValue={options.find(option => option.value === i18n.language)}
      options={options}
      onChange={handleLanguageChange}
      isSearchable={false}
      styles={customStyles}
      components={{ DropdownIndicator }} // Usando o globo no lugar da seta
    />
  )
}

export default LanguageSwitcher
