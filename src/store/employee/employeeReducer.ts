import { type Employee, type EmployeeState } from "./employee.types"
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

// type Action = 
//     | { type: "ADD_EMPLOYEE"; payload:{
//         employee:Employee
//     } }
//     | { type: "DELETE_EMPLOYEE"; payload:{
//         id:string
//     }}
//     | {type: "UPDATE_EMPLOYEE"; payload:{
//         id:string,
//         employee:Employee
//     }}

const initialState:EmployeeState={employees:[]}

// function employeeReducer(state: EmployeeState=initialEmployeeState,action:Action): EmployeeState{
    
//     switch(action.type){
//         case "ADD_EMPLOYEE":

//             return {...state,employees:[...state.employees,action.payload.employee]}

//         case "DELETE_EMPLOYEE":

//             return {
//                 ...state,
//                 employees: state.employees.filter((employee) => employee.employeeId != action.payload.id)
//             }

//         case "UPDATE_EMPLOYEE":
//             return {
//                 ...state,
//                 employees:state.employees.map((emp)=>{
//                     if(emp.employeeId==action.payload.id){
//                         return action.payload.employee
//                     }else{
//                         return emp
//                     }
//                 })
//             }

//         default:
//             return state


        
//     }

// }

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

// export default employeeReducer


