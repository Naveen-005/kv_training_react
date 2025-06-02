import { useParams } from "react-router-dom"
import EmployeeForm from "../employeeForm/EmployeeForm"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { useGetEmployeeListQuery, useGetEmployeeQuery } from "../../api-service/employees/employee.api"
import { type Employee } from "../../store/employee/employee.types"

const EditEmployee = () => {

    const {id}=useParams()
    const { data: employeeDetails } = useGetEmployeeQuery({id:parseInt(id)})
    // const employeeList = useSelector((state:any)=> state.employees)

    const [employee,setEmployee] = useState(employeeDetails)

    const handleEdit = (event:Event) => {
        {/*
        event.preventDefault()
        dispatch({type:"UPDATE_EMPLOYEE",
            payload:{
                id:id,
                employee:employee
            }
        })
        */}
    }

    return(
        <>

            <div className="heading-container">
                <h1>Edit Employee</h1>

            </div>

            <div className='mainContent'>
          
                <EmployeeForm buttonType="button" buttonValue="Update" disableIdEdit={true} employee={employee}
                    setEmployee={setEmployee} onConfirm={handleEdit}/>

            </div>

        </>
    )
}

export default EditEmployee