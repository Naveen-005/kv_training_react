import { useParams } from "react-router-dom"
import EmployeeForm from "../employeeForm/EmployeeForm"

const EditEmployee = () => {

    const {id}=useParams()

    const employee = {
        name:"Manu Krishnan",
        email:"manu.k@gmail.com",
        age:"22",
        password:"manu123",
        employeeId:"KV6273",
        dateOfJoining:"12.07.2021",
        experience:"3",
        department_id:"1",
        role:"Engineer",
        status:"Active",
        address:{
            houseNo:"112",
            line1:"Irinjalakkjuda",
            line2:"Thrissur",
            pincode:"686008"
        }
    }

    return(
        <>

            <div className="heading-container">
                <h1>Edit Employee</h1>

            </div>

            <div className='mainContent'>
          
                <EmployeeForm buttonType="button" buttonValue="Update" disableIdEdit={true} employee={employee}/>

            </div>

        </>
    )
}

export default EditEmployee