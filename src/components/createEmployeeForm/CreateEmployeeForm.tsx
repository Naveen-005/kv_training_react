import './CreateEmployeeForm.css'

import EmployeeForm from '../employeeForm/EmployeeForm'
import { useState } from 'react'
import { useCreateEmployeeMutation } from '../../api-service/employees/employee.api'


const CreateEmployeeForm = () => {

    const [employee,setEmployee]= useState({
        name:"",
        email:"",
        age:25,
        password:"",
        employeeId:"",
        dateOfJoining:"",
        experience:0,
        department_id:1,
        role:"",
        status:"",
        address:{
            houseNo:"",
            line1:"",
            line2:"",
            pincode:""
        }
    })

    // const dispatch = useAppDispatch()

    const [createEmployee] = useCreateEmployeeMutation()

    const handleCreate = (event:Event) => {
        event.preventDefault()
        createEmployee(employee)
    }

    

    return(

        <>

            <div className="heading-container">
                <h1>Create Employee</h1>

            </div>

            <div className='mainContent'>
          
                <EmployeeForm buttonType='submit' buttonValue='Create' onConfirm={handleCreate} 
                    employee={employee} setEmployee={setEmployee}/>
            </div>

     
        </>
    )
}

export default CreateEmployeeForm