import { useNavigate, useParams } from "react-router-dom"
import './EmployeeDetails.css'

const EmployeeDetails = () => {

    const {id} = useParams()

    const navigate = useNavigate()

    const handleEdit = () => {

        navigate("edit")
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
                    <p>Vishal M</p>
                </div>
                <div className="details">
                    <p className="label1">Joining Date</p>
                    <p>12.04.2021</p>
                </div>
                <div className="details">
                    <p className="label1">Experience</p>
                    <p>2 Yrs</p>
                </div>
                <div className="details">
                    <p className="label1">Role</p>
                    <p>Full Stack</p>
                </div>
                <div className="details">
                    <p className="label1">Status</p>
                    <p className="status probation">Probation</p>
                </div>

            </div>

            <div className="layer-bottom">
            
                <div className="details address">
                    <p className="label1">Address</p>
                    <p>House No 231, 78712st, Kerala 686008</p>
                </div>

                <div className="details">
                    <p className="label1">Employee ID</p>
                    <p>KV7215</p>
                </div>

            </div>

            </div>
            

        </>
    )
}

export default EmployeeDetails