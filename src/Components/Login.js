import React from 'react'
import "./Login.css";
import {auth,provider} from "../firebase";
function Login() {
    const signIn = e => {
        //do some clever google stuff!! 
        e.preventDefault();
        auth.signInWithPopup(provider).catch(err => alert(err.message))

    }
    return (
        <div className="login">
           <div className="login__logo">
               <img 
               src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/98/Discord_logo.svg/800px-Discord_logo.svg.png"
               alt="" />
               </div> 
               <button onClick={signIn}>Sign In</button>
        </div>
    )
}

export default Login
