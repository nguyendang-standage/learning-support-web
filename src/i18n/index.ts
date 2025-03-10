import i18n from 'i18next'
import en from './en.json'
import ja from './ja.json'
import { commonEN, commonJA } from '@standage-jp/digitrad-ui'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

i18n
	.use(LanguageDetector)
	.use(Backend)
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		// the translations
		// (tip move them in a JSON file and import them,
		// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
		resources: {
			en: {
				translation: {
					...en,
					...commonEN
				}
			},
			ja: {
				translation: {
					...ja,
					...commonJA
				}
			}
		},
		fallbackLng: 'ja',
		supportedLngs: ['en', 'ja'],
		interpolation: {
			escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
		},
		react: {
			useSuspense: false
		}
	})

export default i18n
