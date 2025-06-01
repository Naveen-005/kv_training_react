import { useParams } from "react-router-dom"
import EmployeeForm from "../employeeForm/EmployeeForm"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useState } from "react"

const EditEmployee = () => {

    const {id}=useParams()
    const dispatch = useDispatch()
    const employeeList = useSelector((state:any)=> state.employees)
    const [employee,setEmployee] = useState(employeeList.find((employee:any) => employee.employeeId == id))

    const handleEdit = (event:Event) => {
        event.preventDefault()
        dispatch({type:"UPDATE_EMPLOYEE",
            payload:{
                id:id,
                employee:employee
            }
        })
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