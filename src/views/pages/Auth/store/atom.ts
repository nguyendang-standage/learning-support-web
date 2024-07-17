import { atom } from 'recoil'

export const testState = atom<string>({
	key: 'test',
	default: ''
})

export const testState2 = atom<string>({
	key: 'test2',
	default: ''
})

const authState = { testState, testState2 }
export { authState }
