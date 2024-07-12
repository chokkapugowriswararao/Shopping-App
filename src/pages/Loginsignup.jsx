import React from "react";

import './CSS/LoginSignUp.css'
const LoginSignUp =()=>{
    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-field">
                <input type="text" placeholder=" yourname"/>
                <input type="Email" placeholder="email-address"/>
                <input type="password" placeholder="password"/>
                </div>
                <button>continue</button>
                <p className="loginsignup-login"> Already have an account? <span>login here</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id=""/>
                    <p>By Continuing i agree tom terms of use and privacy policy</p>
                </div>
            </div>

        </div>
    )
}
export default LoginSignUp