import React from 'react'
import './navbar.css'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import Person3Icon from '@mui/icons-material/Person3';
import { useNavigate, Link } from "react-router-dom";



export default function Navbar() {
   const navigate = useNavigate()

  return (
    <div>
      <div className="navBarBox">
         <div className="navLeft">
            <span className="logo">RhythmRodz</span>
         </div>

         <div className="navRight">
         <ul>
        <li ><a class="active" href="Home"><Link to={'/'}>
           <HomeIcon className='homeIcon'/>Home</Link></a></li>

        <li><a href="#news"><Link to={'/about'}>
           <InfoIcon className='homeIcon'/>About</Link></a></li>

        <li><a href="contact"><Link to={'/contact'}>
           <ContactEmergencyIcon className='homeIcon'/>Contact</Link></a></li>
         
        <li className='service'><a href="signup"><Link to={'/service'}>
           <HomeIcon className='homeIcon'/>Service</Link></a></li>  
           

          <Link to={'/signup'}><button className='btn2' ><Person3Icon className='sign'/>Sign Up</button></Link>
           
      </ul>   
           
         </div>

         
      </div>

      <footer>This is Footer</footer>
    </div>
  )
}

