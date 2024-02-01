import React from 'react'
import Navbar from '../components/Navbar';
import "./login.css"
import EmailIcon from '@mui/icons-material/Email';
import LockOpenIcon from '@mui/icons-material/LockOpen';


export default function Login() {
  return (
    <div className='login-background'>
      <Navbar/>
      
      <div className="LoginContainer">
        
      <div className="Loginbox">
      <div className="LoginTopic">Login</div>
      <div className="Loginputs">
          <div className="Loginput">
            <EmailIcon className='Logemailicon'/>
            <input type="text" placeholder='Name' className='name-text'  />
          </div>

          <div className="Loginput">
            <LockOpenIcon className='Logpasswordicon'/>
            <input type="text" placeholder='Password' className='password-text' />
          </div>
      </div>
      <button type='button' className='Login-Btn'>LogIn</button>
      </div>
      
      </div>

    </div>
  )
}
