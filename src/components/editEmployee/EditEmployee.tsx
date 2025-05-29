import { useParams } from "react-router-dom"
import EmployeeForm from "../employeeForm/EmployeeForm"
import InputFormElement from "../inputFormElement/InputFormElement"

const EditEmployee = () => {

    const {id}=useParams()

    const empIdField = <InputFormElement label="Employee ID" placeholer="Employee Id" 
        className='form-input' value={id} disabled={true}/>

    return(
        <>

            <div className="heading-container">
                <h1>Edit Employee</h1>

            </div>

            <div className='mainContent'>
          
                <EmployeeForm buttonType="button" buttonValue="Update"
                    additionalFields={empIdField} disableIdEdit={true}/>

            </div>

        </>
    )
}

export default EditEmployee