import { type Employee, type EmployeeState } from "./employee.types"

type Action = 
    | { type: "ADD_EMPLOYEE"; payload:{
        employee:Employee
    } }
    | { type: "DELETE_EMPLOYEE"; payload:{
        id:string
    }}
    | {type: "UPDATE_EMPLOYEE"; payload:{
        id:string,
        employee:Employee
    }}

const initialEmployeeState={employees:[]}

function employeeReducer(state: EmployeeState=initialEmployeeState,action:Action): EmployeeState{
    
    switch(action.type){
        case "ADD_EMPLOYEE":

            return {...state,employees:[...state.employees,action.payload.employee]}

        case "DELETE_EMPLOYEE":

            return {
                ...state,
                employees: state.employees.filter((employee) => employee.employeeId != action.payload.id)
            }

        case "UPDATE_EMPLOYEE":
            return {
                ...state,
                employees:state.employees.map((emp)=>{
                    if(emp.employeeId==action.payload.id){
                        return action.payload.employee
                    }else{
                        return emp
                    }
                })
            }

        default:
            return state


        
    }

}

export default employeeReducer


