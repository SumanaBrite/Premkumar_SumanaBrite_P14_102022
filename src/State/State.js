import { createGlobalState } from 'react-hooks-global-state'
import employeesData from '../Data/employees'

//set initial data to display in table by default
const initialState = {
    employee: employeesData,
}

const { useGlobalState } = createGlobalState(initialState)

export default useGlobalState
