import "./Login.css";
// import LoginInput from "./LoginInput";
import LoginInput from "./LoginInput";
import { useRef, useEffect } from "react";
import kvLogo from "/assets/kv-logo.png";
import kvLoginImg from "/assets/kv-login.jpeg";
import Button from "./Button";
// import Button from "../button/Button";

const UncontrolledLogin = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const clearButtonRef = useRef<HTMLButtonElement | null>(null);
  const loginButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (usernameRef?.current) usernameRef.current.focus();
  }, []);

  const clearUserName = () => {

    if(!usernameRef.current)
        return

    usernameRef.current.value=""
    if(!clearButtonRef.current)
        return
    clearButtonRef.current.disabled=true
    if(!loginButtonRef.current)
      return
    loginButtonRef.current.disabled=true
  }

  const updateClearButton = () => {

    if(!clearButtonRef.current)
        return
    if(!usernameRef.current)
        return
    if(usernameRef.current.value.length>0){

        clearButtonRef.current.disabled=false
        clearButtonRef.current.onclick=clearUserName

    }
    else{

      clearButtonRef.current.disabled=true
    }
        
        
  }

  const updateLoginButton = () => {

    if(!usernameRef.current)
      return
    if(!passwordRef.current)
      return
    if(!loginButtonRef.current)
      return
    if(usernameRef.current.value.length>0 && passwordRef.current.value.length>0){
      loginButtonRef.current.disabled=false
      // loginButtonRef.current.onclick=handleSubmit
    }else{

      loginButtonRef.current.disabled=true
    }



  }

  const changeMultiple = () => {
    updateLoginButton()
    updateClearButton()
  }

  // const handleSubmit = () => {

  //   console.log("submit")
  // }

  return (
    <div className="content">
      <div className="pattern-side">
        <div className="pattern" />
        <div className="circle-large">
          <div className="circle-inner">
            <img src={kvLoginImg} alt="KV Login" className="login-image" />
          </div>
        </div>
      </div>
      <div className="login-side">
        <div className="login-content">
          <img className="logo" src={kvLogo} alt="KV Logo" />
          <form>

            <div className="parentContainer">

                <LoginInput
                    id="login-username-input"
                    label="Username"
                    ref={usernameRef}
                    onChange={changeMultiple}
                    endAdornment={<Button type="button" onClick={clearUserName} disabled={true} ref={clearButtonRef}>Clear</Button>}
                    />
                
            </div>
            


            <LoginInput id="login-password-input" label="Password" ref={passwordRef} onChange={updateLoginButton}/>

            <Button type="submit" className="login-button" ref={loginButtonRef} disabled={true}>Login</Button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default UncontrolledLogin;