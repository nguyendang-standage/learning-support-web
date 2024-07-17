import plugin from 'tailwindcss/plugin'
/** @type {import('tailwindcss').Config} */
import {
  tailwindTheme,
  tailwindAddTextShadowPlugin
} from '@standage-jp/digitrad-ui/tailwindTheme'
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  prefix: 'tw-',
  theme: {
    ...tailwindTheme()
  },
  plugins: [tailwindAddTextShadowPlugin(plugin)]
}
