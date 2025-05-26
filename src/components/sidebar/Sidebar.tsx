import './Sidebar.css'
import kv_logo from '../../assets/kv-logo.png'
import icon from '../../assets/icon.svg'

const Sidebar = (props:{
    pageName:string
}) => {

    return(

        <>
            <aside>
                <div className="logo-container">
                    <a href=""><img className="logo" src={kv_logo} alt="key value logo" /></a>
                </div>
                <nav>
                    <div className="nav-item">
                        <div className="icon-container">
                            <img src={icon} alt="icon" />
                        </div>
                        <p>{props.pageName}</p>
                    </div>
                </nav>
            </aside>
        </>
    )
}

export default Sidebar