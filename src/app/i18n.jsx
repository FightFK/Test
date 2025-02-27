import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import th from './locales/th/translation.json'
import en from './locales/eng/translation.json'


i18n.use(initReactI18next).init({
    resources:{
        en: {translation : en},
        th: {translation : th},
    },
    lng : "en",
    fallbackLn : 'eng',
    interpolation:{
        escapeValue: false
    }
})


export default i18n;