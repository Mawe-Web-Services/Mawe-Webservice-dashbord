import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enTranslation from '../locales/en.json'
import ptTranslation from '../locales/pt.json'

const resources: {
  en: { translation: typeof enTranslation }
  pt: { translation: typeof ptTranslation }
} = {
  en: {
    translation: enTranslation,
  },
  pt: {
    translation: ptTranslation,
  },
}

i18n.use(initReactI18next).init({
  resources,
  debug: true,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
})

export default i18n
