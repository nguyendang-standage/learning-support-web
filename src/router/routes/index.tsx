import HomePage from '@/views/pages/Home/Home'
import LoginPage from '@/views/pages/Auth/Login'
import { PATH } from '../path'
import { TCustomRoute } from './type'

const route: Array<TCustomRoute> = [
	{
		path: PATH.HOME,
		element: <HomePage />,
		meta: {
			isAuthen: true
		}
	},
	{
		path: PATH.LOGIN,
		element: <LoginPage />,
		meta: {
			isAuthen: false
		}
	}
]

export { route }
