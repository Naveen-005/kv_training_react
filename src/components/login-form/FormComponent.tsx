import Button from "../button/Button"
import './FormComponent.css'
import logo from "../../assets/kv-logo.png"
import Input from "../input/Input"

const FormComponent = () => {

    return (
        
            <div className="login-form">
                <form action="">
                    <img src={logo} alt="" className="logo-image form-element" />
                    <div className="over-box">
                        <label htmlFor="username" ><p>username</p></label>
                    </div>
                    <Input type="text" placeholder="" id="username" name="username" className="form-element" />
                    <Input type="password" placeholder="Password" name="password" id="password" className="form-element"/>
                    <Button type="submit" value="Login" className="form-element login-btn"/>

                </form>
            </div>
    
    )
}

export default FormComponent