import FormComponent from "../../components/login-form/FormComponent"
import LoginLeftPanel from "../../components/login-form-left/LoginLeftPanel"
// import { Navigate } from "react-router-dom"

import './Login.css'

const Login = () => {

    // const isLoggedIn = () => {
    //     const loggedIn = localStorage.getItem("isLoggedIn")
    //     return loggedIn === "true"
    // }

    // if(isLoggedIn()){
    //     return <Navigate to="/employees"/>
    // }

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