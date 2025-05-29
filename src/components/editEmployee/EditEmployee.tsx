import EmployeeForm from "../employeeForm/EmployeeForm"

const EditEmployee = () => {

    return(
        <>

            <div className="heading-container">
                <h1>Edit Employee</h1>

            </div>

            <div className='mainContent'>
          
                <EmployeeForm buttonType="button" buttonValue="Update"/>

            </div>

        </>
    )
}

export default EditEmployee