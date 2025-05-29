import './CreateEmployeeForm.css'

import EmployeeForm from '../employeeForm/EmployeeForm'


const CreateEmployeeForm = () => {


    return(

        <>

            <div className="heading-container">
                <h1>Create Employee</h1>

            </div>

            <div className='mainContent'>
          
                <EmployeeForm buttonType='submit' buttonValue='Create'/>
            </div>

     
        </>
    )
}

export default CreateEmployeeForm