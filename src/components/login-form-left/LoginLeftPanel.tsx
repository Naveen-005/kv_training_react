import kvLoginImage from '../../assets/kv-login.jpeg'
import './LoginLeftPanel.css'

const LoginLeftPanel = () => {

    return(
    
            <div className="blue-box">
                <div className="photo-circle">
                    <img src={kvLoginImage} alt="login art" className="login-image" /> 

                </div>    
            </div>
      
    )
}

export default LoginLeftPanel