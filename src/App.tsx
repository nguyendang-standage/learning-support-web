import React from 'react'
import Router from './router/Router'
import { RecoilRoot } from 'recoil'

function App() {
	return (
		<React.Suspense fallback={null}>
			<RecoilRoot>
				<Router />
			</RecoilRoot>
		</React.Suspense>
	)
}

export default App
