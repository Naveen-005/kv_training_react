import './CreateEmployeeForm.css'

import EmployeeForm from '../employeeForm/EmployeeForm'
import { useState } from 'react'
import { useDispatch  } from 'react-redux'


const CreateEmployeeForm = () => {

    const [employee,setEmployee]= useState({
        name:"",
        email:"",
        age:"",
        password:"",
        employeeId:"",
        dateOfJoining:"",
        experience:"",
        department_id:"",
        role:"",
        status:"",
        address:{
            houseNo:"",
            line1:"",
            line2:"",
            pincode:""
        }
    })

    const dispatch = useDispatch()

    const handleCreate = (event:Event) => {
        event.preventDefault()
        dispatch({type:"ADD_EMPLOYEE",
            payload:{
                employee:employee
            }
        })
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