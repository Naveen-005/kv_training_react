import Button from "../button/Button"
import './FormComponent.css'

const FormComponent = () => {

    return (
        <>
            <div className="login-form">
                <form action="">
                    <img src="images/kv-logo.png" alt="" className="logo-image form-element" />
                    <div className="over-box">
                        <label htmlFor="username" ><p>username</p></label>
                    </div>
                    <input type="text" id="username" name="username" className="form-element" />
                    <input type="password" placeholder="Password" name="password" id="password" className="form-element" />
                    <Button />

                </form>
            </div>
        </>
    )
}

export default FormComponent