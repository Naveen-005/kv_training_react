import { useNavigate } from 'react-router-dom'
import './Sidebar.css'
// import kv_logo from '../../assets/kv-logo.png'
//import icon from '../../assets/icon.svg'

const Sidebar = (props:{
    pageName:string
}) => {


    const navigate = useNavigate();

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
                </nav>
            </aside>
        </>
    )
}

export default Sidebar