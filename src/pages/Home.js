import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js'; // Import the Typed library
import './home.css';
import Navbar from '../components/Navbar';


export default function Home() {
  useEffect(() => {
    // Use useEffect to initialize Typed after the component has mounted
    const typed = new Typed('.multiple-text', {
      strings: ['Frontend Developer', 'Youtuber', 'Blogger'],
      typeSpeed: 100,
      backspeed: 100,
      backDelay: 1000,
      loop: true,  
    }); {/* ... */}

    // Cleanup the Typed instance when the component is unmounted
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array

  return (
    <div className='bg'>
      <Navbar />
      
      
      <br></br>
      {/* Auto Typing part    Auto Typing part      Auto Typing part    Auto Typing part      Auto Typing part  */}
      <h4>And I am a <span className="multiple-text"></span></h4>

      <div className='link'><Link to="/about">Go to the About page</Link></div>

    
      

      {/* ... */}
    </div>
  );
}
