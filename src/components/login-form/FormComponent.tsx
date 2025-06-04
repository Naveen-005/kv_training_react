import Button from "../button/Button"
import './FormComponent.css'
import Input from "../input/Input"
import React, { useEffect, useRef, useState } from "react"
import { useLocalStorage } from "../../hooks/useLocalStorage"
import { useNavigate } from "react-router-dom"
import { useLoginMutation } from "../../api-service/auth/login.api"


const FormComponent = () => {

    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [error, setError]=useState("")

    const [login, {isLoading}] = useLoginMutation()

    const navigate = useNavigate()

    const [showPassword,setShowPassword]=useLocalStorage('showPassword')

    const handleUsernameChange = (event:React.ChangeEvent<HTMLInputElement>) => {

        setUsername(event.target.value)
    }

    const handleLogin = async (event:Event) => {
        event.preventDefault()
        login({
            email:username,
            password:password
        }).unwrap()
        .then((response) => {
            localStorage.setItem("token",response.accessToken)
            navigate("/employees")
        }).catch((error)=>{
            setError(error.data.message)
        })
  
    }

    

    const handleCheckboxChange = () => {

        setShowPassword(!showPassword)
    }

    const usernameRef = useRef<HTMLInputElement>(null);

    useEffect(() => {

        if(usernameRef.current){
            usernameRef.current.focus();
        }
    },[])

    const handlePasswordChange = (event:React.ChangeEvent<HTMLInputElement>) => {

        setPassword(event.target.value)
    }

    return (
        
            <div className="login-form">
                <form action="">
                    <img src="/assets/kv-logo.png" alt="" className="logo-image" />
                    <div className="over-box">
                        <label htmlFor="username" ><p>Username</p></label>
                    </div>
                    <Input type="text" placeholder=" " id="username" name="username" 
                        className="form-element" value={username} 
                        onChange={handleUsernameChange} ref={usernameRef}
                        endAdornment={<input type="button" value="Clear" 
                            className="endAdornment" onClick={()=>{setUsername('')}}
                            disabled={username.length<1}/>} label="Username"/>
                    {
                        username.length>=20 &&
                            <p className="error">Username must be less than 20 characters</p>
                    }
                    

                    <div className="over-box">
                        <label htmlFor="password" ><p>Password</p></label>
                    </div>
                    
                    <Input type={showPassword?"text":"password"} placeholder="Password" name="password" 
                        id="password" className="form-element" value={password}  label="Password"
                        onChange={handlePasswordChange}
                        />
                    
                    <div className="parentContainer" >
                        <Input type="checkbox" className="checkbox" checked={showPassword as boolean}
                            onChange={handleCheckboxChange}/>
                        <span className="label"> Show Password </span>
                    </div>

                    <p className="error">{error}</p>
                    
                    
                    <Button type="submit" value="Login" className="form-element login-btn" text="Login" name="Login"
                        disabled={username.length<1 || password.length<1 || isLoading} onClick={handleLogin}/>

                </form>
                
            </div>
    
    )
}

export default FormComponent