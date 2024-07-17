import { LANGUAGES_TYPE } from '@/utilities/constants/common'
import { Dropdown } from '@standage-jp/digitrad-ui'
import { useRef, MouseEvent } from 'react'
import { Globe } from 'react-feather'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

const ToggleDropDownComponent = (): JSX.Element => {
	const { i18n } = useTranslation()
	const GLOBE_SIZE = useRef<number>(24).current
	return (
		<div
			id='IntlToggleDropDown'
			className='h-full tw-flex tw-select-none tw-flex-row tw-items-center tw-justify-center tw-space-x-1 tw-px-0.5'
		>
			<Globe size={GLOBE_SIZE} color='#0d172680' />
			<p className='tw-text-positive-weak'>{i18n.language.toLocaleUpperCase()}</p>
		</div>
	)
}
const MenuDropDownComponent = (): JSX.Element => {
	const { i18n } = useTranslation()
	const languages = useRef<string[]>(['en', 'ja']).current
	const onChangeLanguage = (language: string, event: MouseEvent<HTMLDivElement>) => {
		event.preventDefault()
		if (language !== i18n.language) {
			i18n.changeLanguage(language)
		}
	}
	return (
		<div
			data-testid='MenuIntlDropDownComponent'
			className='tw-z-[500] tw-w-[12.5rem] tw-overflow-hidden tw-rounded-md tw-bg-negative-strong tw-shadow-dropdown'
		>
			{languages.map(language => {
				return (
					<div
						onClick={event => onChangeLanguage(language, event)}
						className={classNames(
							`tw-flex tw-h-[2.375rem] tw-w-full tw-cursor-pointer tw-select-none tw-justify-between tw-px-4 tw-py-2.5 tw-text-lg tw-text-positive-normal hover:tw-bg-option-selected hover:tw-text-positive-strong [&.selected]:tw-bg-option-active [&.selected]:!tw-text-positive-strong`,
							{ selected: i18n.language === language }
						)}
						key={language}
					>
						{LANGUAGES_TYPE[language as keyof typeof LANGUAGES_TYPE]}
					</div>
				)
			})}
		</div>
	)
}

const IntlDropDownComponent = () => {
	return (
		<section className='tw-w-10 hover:tw-cursor-pointer' data-testid='IntlDropDownContentComponent'>
			<Dropdown
				end
				className='tw-flex tw-h-10 tw-items-center tw-justify-center [&_div[data-popper-reference-hidden="false"]]:tw-z-10'
				offset={[0, 18]}
				dropdownToggle={ToggleDropDownComponent}
				dropdownMenu={MenuDropDownComponent}
			/>
		</section>
	)
}
export default IntlDropDownComponent
