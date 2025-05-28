import Button from "../button/Button"
import './FormComponent.css'
// import logo from "../../assets/kv-logo.png"
import Input from "../input/Input"
import React, { useEffect, useRef, useState } from "react"
import { useLocalStorage } from "../../hooks/useLocalStorage"

const FormComponent = () => {

    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const [usernameError,setUsernameError]=useState(false)

    const [showPassword,setShowPassword]=useLocalStorage('showPassword')

    const handleUsernameChange = (event:React.ChangeEvent<HTMLInputElement>) => {

        setUsername(event.target.value)
    }

    

    const handleCheckboxChange = () => {

        setShowPassword(!showPassword)
    }

    const usernameRef = useRef<HTMLInputElement>(null);

    useEffect(()=>{

        if(username.length > 10)
            setUsernameError(true)

        return () => {
            setUsernameError(false)
        }

    },[username])

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
                        <label htmlFor="username" ><p>username</p></label>
                    </div>
                    <Input type="text" placeholder=" " id="username" name="username" 
                        className="form-element" value={username} 
                        onChange={handleUsernameChange} ref={usernameRef}
                        endAdornment={<Button type="button" value="Clear" 
                            className="endAdornment" onClick={()=>{setUsername('')}}
                            disabled={username.length<1}/>}/>
                    
                    {
                        usernameError &&
                            <p className="error" >Username Exceeded 10 characters</p>
                        
                    }
                    
                    <Input type={showPassword?"text":"password"} placeholder="Password" name="password" 
                        id="password" className="form-element" value={password} 
                        onChange={handlePasswordChange}
                        />

                    <div className="parentContainer" >
                        <Input type="checkbox" className="checkbox" checked={showPassword as boolean}
                            onChange={handleCheckboxChange}/>
                        <span className="label"> Show Password </span>
                    </div>
                    
                    
                    <Button type="submit" value="Login" className="form-element login-btn"
                        disabled={username.length<1 || password.length<1}/>

                </form>
            </div>
    
    )
}

export default FormComponent