import React from "react";
import { setCookie } from '../../../helpers/functionCookies';
function LoginPage({ logo, setUsernameCheck, Message, setPassWordCheck, LoginStatus, UsernameCheck, setPageLogin }) {
    function checkLogin() {
        setCookie("username", UsernameCheck, 0.5);
        setPageLogin("MainPage");
    }
    return (
        <div className="row">
            <div className="col-lg-6 md-12 text-center">
                <img src={logo} alt="logo" />
            </div>
            <div className="col-lg-6 md-12" >
                <form className="mt-5 text-center">
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username"
                            onChange={() => setUsernameCheck(document.getElementById("exampleInputEmail1").value)}
                        />
                        <small id="emailHelp" className="form-text text-muted">{Message}</small>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                            onChange={() => setPassWordCheck(document.getElementById("exampleInputPassword1").value)}
                        />
                    </div>
                    <button
                        onClick={() => checkLogin()}
                        type="button" className="btn btn-primary" disabled={LoginStatus ? false : true}
                    // {LoginStatus ? disabled : enable}
                    >Log in</button>
                    <button
                        onClick={() => setPageLogin("SignUp")}
                        type="button" className="btn btn-primary ml-3"
              
                    >Sign Up</button>
                </form>
            </div>
        </div>
    )
}
export default LoginPage

