import type { StylesConfig } from 'react-select'

interface LanguageOption {
  value: string
  label: JSX.Element
}

export const customStyles: StylesConfig<LanguageOption, false> = {
  control: provided => ({
    ...provided,
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40px',
    marginBottom: 0,
  }),
  singleValue: provided => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    height: '100%',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused
      ? 'rgba(255, 255, 255, 0.1)'
      : 'transparent',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40px',
  }),
  menu: provided => ({
    ...provided,
    backgroundColor: 'transparent',
  }),
}
