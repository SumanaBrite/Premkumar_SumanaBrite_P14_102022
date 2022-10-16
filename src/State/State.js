import { createGlobalState } from 'react-hooks-global-state'

const initialState = {
    employee: '',
}

const { useGlobalState } = createGlobalState(initialState)

export default useGlobalState
