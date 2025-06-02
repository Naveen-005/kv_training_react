import './CreateEmployeeForm.css'

import EmployeeForm from '../employeeForm/EmployeeForm'
import { useState } from 'react'
import { useDispatch  } from 'react-redux'
import { addEmployee } from '../../store/employee/employeeReducer'
import type { Employee } from '../../store/employee/employee.types'
import { useAppDispatch } from '../../store/store'


const CreateEmployeeForm = () => {

    const [employee,setEmployee]= useState({
        name:"",
        email:"",
        age:0,
        password:"",
        employeeId:"",
        dateOfJoining:new Date(),
        experience:0,
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

    const dispatch = useAppDispatch()

    const handleCreate = (event:Event) => {
        event.preventDefault()
        // dispatch({type:"ADD_EMPLOYEE",
        //     payload:{
        //         employee:employee
        //     }
        // })

        const action = addEmployee(employee)
        dispatch(action)
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