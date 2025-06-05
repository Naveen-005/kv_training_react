import { useGetEmployeeQuery } from "../../api-service/employees/employee.api"
import './Profile.css'

const parseJwt = (token:string) => {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
};

const Profile = () => {

    const token = localStorage.getItem("token");
    const {id}=parseJwt(token as string)
 

    const { data: user } = useGetEmployeeQuery({id:parseInt(id)})

    console.log(user)

    

    return(
        <>
             <div className="heading-container">
                <h1>Profile</h1>



            </div>

            <div className='mainContent'>

                <div className="layer">

                    <div className="details">
                        <p className="label1">Employee Name</p>
                        <p>{user?.name}</p>
                    </div>
                    <div className="details">
                        <p className="label1">Joining Date</p>
                        <p>{new Date(user?.dateOfJoining).toLocaleDateString()}</p>
                    </div>
                    <div className="details">
                        <p className="label1">Experience</p>
                        <p>{user?.experience} Years</p>
                    </div>
                    <div className="details">
                        <p className="label1">Role</p>
                        <p>{user?.role}</p>
                    </div>
                    <div className="details">
                        <p className="label1">Status</p>
                        <p className={`status ${user?.status.toLowerCase()}`}>{user?.status}</p>
                    </div>


                </div>

                <div className="layer-bottom-profile">

                    <div className="details address-profile">
                        <p className="label1">Address</p>
                        <p>{user?.address?.houseNo}</p>
                        <p>{user?.address?.line1}</p>
                        <p>{user?.address?.line2}</p>
                        <p>{user?.address?.pincode}</p>
                    </div>

                    <div className="details">
                        <p className="label1">Employee ID</p>
                        <p>{user?.employeeId}</p>
                    </div>

                    <div className="details">
                        <p className="label1">Age</p>
                        <p>{user?.age} Years</p>
                    </div>

                    <div className="details">
                        <p className="label1">Department</p>
                        <p>{user?.department.name}</p>
                    </div>

                    <div className="details">
                        <p className="label1">Email</p>
                        <p>{user?.email}</p>
                    </div>

                </div>


            </div>

        </>
    )
}

export default Profile