import { createGlobalState } from 'react-hooks-global-state'
import employeesData from '../Data/employees'



const initialState = {
    employee: employeesData,
}

const { useGlobalState } = createGlobalState(initialState)

export default useGlobalState
