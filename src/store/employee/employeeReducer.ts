import { type Employee, type EmployeeState } from "./employee.types"
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

const initialState:EmployeeState={employees:[]}

export const employeeSlice = createSlice({
    name:'employee',
    initialState,
    reducers: {
        addEmployee: (state,action: PayloadAction<Employee>) => {
            state.employees.push(action.payload)
        }
    }
})

export const {addEmployee} = employeeSlice.actions
export default employeeSlice.reducer


