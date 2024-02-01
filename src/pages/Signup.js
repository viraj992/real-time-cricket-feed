import React, { useState } from 'react';
import "./signup.css"

import user_icon from '../images/person.png'
import email_icon from '../images/email.png'
import password_icon from '../images/password.png'
import coverImg from '../images/vase.png'

import Navbar from '../components/Navbar';
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate()

  return (
    <div>
      <Navbar/>
      <div className="signup-Box">
        <div className="sideImage"> 
          
        <img src={coverImg} alt="" className="pagePic" />
        </div>

      <div className="container">
        <div className="header">
          <div className="text">Sign Up</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={user_icon} />
            <input type="text" placeholder='Name'  />
          </div>
          <div className="input">
            <img src={email_icon} />
            <input type="email" placeholder='Email'  />
          </div>
          <div className="input">
            <img src={password_icon} />
            <input type="password" placeholder='password' />
          </div>
        </div>
        <div className="forgot-password">Already Have an account 
        <span className='clickbtn'><a href="Login" onClick={()=>navigate(`/login`)}>Click Here!</a></span> To Login</div>
        
        <div className="submit-container">
          <div className="submit" >Sign up</div>
          
        </div>
      </div>
      </div>
    </div>
    
  )
}
