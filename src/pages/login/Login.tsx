import FormComponent from "../../components/form-component/FormComponent"
import LoginLeftPanel from "../../components/login-form-left/LoginLeftPanel"

import './Login.css'

const Login = () => {

    return(
        <>
            <main>
                
                <LoginLeftPanel />
                <FormComponent />

            </main>

            
        </>
    )
}

export default Login