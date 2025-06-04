import { useParams } from "react-router-dom"
import EmployeeForm from "../employeeForm/EmployeeForm"
import { useEffect, useState } from "react"
import { useGetEmployeeQuery, useUpdateEmployeeMutation } from "../../api-service/employees/employee.api"
import { useNavigate } from "react-router-dom"

const EditEmployee = () => {

    const {id}=useParams()
    const { data: employeeDetails } = useGetEmployeeQuery({id:parseInt(id as string)})

    const [employee,setEmployee] = useState(employeeDetails)

    useEffect(()=>{

        if(employeeDetails){
            setEmployee(()=>({...employeeDetails,
                department_id:employeeDetails?.department?.id,
                dateOfJoining:new Date(employeeDetails?.dateOfJoining).toISOString().split('T')[0],
            }))
        }
        
    },[employeeDetails])
    
    const [updateEmployee] = useUpdateEmployeeMutation()
    const navigate = useNavigate()

    const handleEdit = (event:Event) => {
 
        updateEmployee({
            id:id,
            payload:employee
        }).unwrap()
        .then(()=>{
            alert("Employee details updated")
            navigate(`/employees/${id}`)
        })
        .catch((error)=>{
            alert(error.data.message)
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