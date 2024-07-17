import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// ** Locale
import './i18n'
// ** Style
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
