import { useNavigate } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = (props:{
    pageName:string
}) => {


    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.removeItem("token")
        navigate("/login")
    }

    return(

        <>
            <aside>
                <div className="logo-container">
                    <a href=""><img className="logo" src='/assets/kv-logo.png' alt="key value logo" /></a>
                </div>
                <nav>
                    <div className="nav-item" onClick={() => {navigate("/employees")}}>
                        <div className="icon-container">
                            <img src="/assets/icon.svg" alt="icon" />
                        </div>
                        <p>{props.pageName}</p>
                    </div>
                    <div className="nav-item" onClick={() => {navigate("/profile")}}>
                        <div className="icon-container">
                            <img src="/assets/icon.svg" alt="icon" />
                        </div>
                        <p>Profile</p>
                    </div>
                    <div className="nav-item" onClick={handleLogout}>
                        <div className="icon-container">
                            <img src="/assets/logout.png" alt="icon" />
                        </div>
                        <p>Logout</p>
                    </div>
                </nav>
            </aside>
        </>
    )
}

export default Sidebar