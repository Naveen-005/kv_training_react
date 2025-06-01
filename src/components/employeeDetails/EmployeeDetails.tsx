import { useNavigate, useParams } from "react-router-dom"
import './EmployeeDetails.css'
import { useSelector } from 'react-redux'


const EmployeeDetails = () => {

    const {id} = useParams()
    const employeeList = useSelector((state:any)=> state.employees)
    const employeeDetails = employeeList.find((employee:any) => employee.employeeId == id)

    const navigate = useNavigate()

    const handleEdit = () => {

        navigate("/employees/"+id+"/edit")
    }

    return(
        <>

            <div className="heading-container">
                <h1>Employee Details</h1>

                <div className='end-items'>

                    <div className='btn-item item' onClick={handleEdit}>
                        <button type='button' className='round-btn'>
                            <img src="/assets/pencil-white.svg" alt="" className="icon"/>
                        </button>
                        <span className='btn-text'>
                            Edit   
                        </span>
                    </div>
                    
                </div>

            </div>

            <div className='mainContent'>

            <div className="layer">

                <div className="details">
                    <p className="label1">Employee Name</p>
                    <p>{employeeDetails.name}</p>
                </div>
                <div className="details">
                    <p className="label1">Joining Date</p>
                    <p>{employeeDetails.dateOfJoining}</p>
                </div>
                <div className="details">
                    <p className="label1">Experience</p>
                    <p>{employeeDetails.experience} Years</p>
                </div>
                <div className="details">
                    <p className="label1">Role</p>
                    <p>{employeeDetails.role}</p>
                </div>
                <div className="details">
                    <p className="label1">Status</p>
                    <p className="status probation">{employeeDetails.status}</p>
                </div>

            </div>

            <div className="layer-bottom">
            
                <div className="details address">
                    <p className="label1">Address</p>
                    <p>{employeeDetails.address.houseNo}</p>
                    <p>{employeeDetails.address.line1}</p>
                    <p>{employeeDetails.address.line2}</p>
                    <p>{employeeDetails.address.pincode}</p>
                </div>

                <div className="details">
                    <p className="label1">Employee ID</p>
                    <p>{employeeDetails.employeeId}</p>
                </div>

            </div>

            </div>
            

        </>
    )
}

export default EmployeeDetails