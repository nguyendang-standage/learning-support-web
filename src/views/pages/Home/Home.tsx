import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@standage-jp/digitrad-ui'
import IntlDropDownComponent from '@/views/layout/MainLayout/Header/components/IntlDropDownComponent'

const HomePage: React.FC = () => {
	const { t } = useTranslation()
	return (
		<>
			<IntlDropDownComponent />
			<Button
				size='lg'
				color='secondary'
				outline
				className='tw-border-trans-muted tw-text-positive-weak'
				data-testid='btnHello'
			>
				{t('hello_world')}
			</Button>
		</>
	)
}

export default HomePage
