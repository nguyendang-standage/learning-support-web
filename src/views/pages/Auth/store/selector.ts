import { selector } from 'recoil'
import { authState } from './atom'

const getAllTest = selector<{ test1: string; test2: string }>({
	key: 'testList',
	get: ({ get }) => {
		const test1 = get(authState.testState)
		const test2 = get(authState.testState2)
		const newList = { test1, test2 }
		return newList
	}
})

const authAction = { getAllTest }
export { authAction }
