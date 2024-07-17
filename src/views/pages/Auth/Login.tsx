import React from 'react'
import { useTranslation } from 'react-i18next'
import { useRecoilState } from 'recoil'
import { Button } from '@standage-jp/digitrad-ui'
import { authState } from './store'

const LoginPage: React.FC = () => {
	const [testState, setTestState] = useRecoilState(authState.testState)
	const { t } = useTranslation()
	return (
		<div className='tw-mt-3 tw-flex tw-items-center tw-justify-center'>
			<span className='tw-mr-2'>{t('login')}</span>
			<Button
				size='lg'
				color='secondary'
				outline
				className='tw-w-auto tw-border-trans-muted tw-py-1.5 tw-text-positive-weak'
				onClick={() => setTestState('test recoil success')}
			>
				{testState || 'press to test'}
			</Button>
		</div>
	)
}

export default LoginPage
