import React from 'react';

import './contact.css';
import Navbar from '../components/Navbar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import TtyIcon from '@mui/icons-material/Tty';
import WatchLaterIcon from '@mui/icons-material/WatchLater';


import fbImg from '../images/fb.png';
import twitterImg from '../images/twit.png';
import instImg from '../images/inst.png'

  export default function Contact() {
    return (
      <div className='contact-background'>
      <Navbar/>

      <div className="contact-Bigbox">
        <div className="insideLeftbox">
          <div className="inside-LeftTitle">Contact Us</div>

          <div className="fieldsets">
          <div className="location-part">
            <LocationOnIcon className='iconLocation'/>
            <span className="location">23, Avenuede peris 75012 Peris</span>
          </div>

          <div className="location-part">
            <EmailIcon className='iconLocation'/>
            <span className="email">arunweerasuriya@gmail.com</span>
          </div>

          <div className="location-part">
            <TtyIcon className='iconLocation'/>
            <span className="telephone">011-34827929</span>
          </div>

          <div className="location-part">
            <WatchLaterIcon className='iconLocation'/>
            <span className="Working Hours">Mon-Fri 9am to 7pm</span>
          </div>

          </div>

          <div className="social-Logos">
          <img src={instImg} alt="" className="socialIcon" />
          <img src={fbImg} alt="" className="socialIcon" />
          <img src={twitterImg} alt="" className="socialIcon" />
          </div>
        </div>

             {/* Right side Box */} 
        <div className="InsideRightBox"> 
          <div className="alignWord">
             <span className="RightTitle">
               Get In Touch</span>
          </div>

          <form>

             <div className="customfield">
             <input type="text" className='customName' placeholder='Enter your Name'></input><br></br>
             <input type="text" className='customName' placeholder='Enter a Valid email address'></input>
             <textarea class="custombox" rows="3" placeholder='Please type your message'></textarea>
             </div>
             <button type='button' className='btnSubmit'>Submit</button>
          </form>
        </div>
      </div>
        
        
    
      </div>
    )
  }
