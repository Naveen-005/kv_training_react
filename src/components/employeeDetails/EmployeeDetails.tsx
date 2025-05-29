import { useParams } from "react-router-dom"
import './EmployeeDetails.css'

const EmployeeDetails = () => {

    const {id} = useParams()

    return(
        <>
            {/* <p>Employee Details</p>
            <p>Employee id = {id}</p> */}
            <div className='mainContent'>

            <div className="layer">

                <div className="details">
                    <p>Employee Name</p>
                    <p>Vishal M</p>
                </div>
                <div className="details">
                    <p>Joining Date</p>
                    <p>12.04.2021</p>
                </div>
                <div className="details">
                    <p>Experience</p>
                    <p>2 Yrs</p>
                </div>
                <div className="details">
                    <p>Role</p>
                    <p>Full Stack</p>
                </div>
                <div className="details">
                    <p>Status</p>
                    <p>Probation</p>
                </div>

            </div>

            <div className="layer bottom">
            
                <div className="details">
                    <p>Address</p>
                    <p>House No 231, 78712st, Kerala 686008</p>
                </div>

                <div className="details">
                    <p>Employee ID Proof</p>
                    <p></p>
                </div>

                <div className="details">
                    <p>Employee ID</p>
                    <p>KV7215</p>
                </div>

            </div>

            </div>
            

        </>
    )
}

export default EmployeeDetails