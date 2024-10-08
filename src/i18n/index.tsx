import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ENUS from '../i18n/locales/en/en-us.json'
import PTBR from '../i18n/locales/pt/pt-br.json'

const resources = {
  'pt-BR': PTBR,
  'en-us': ENUS,
}

i18n.use(initReactI18next).init({
  resources,
  lng: navigator.language,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n