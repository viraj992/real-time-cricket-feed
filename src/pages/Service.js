import React from 'react'
import Navbar from '../components/Navbar';
import "./service.css"
import { Switch } from "antd";  {/* antd kiyanne Library ekak  */}

export default function Service() {
  return (
    <div>
        <Navbar/>
       
      <div className="test">
  
      <Switch className="test" defaultChecked={true} checkedChildren="Register"
      unCheckedChildren="Sign up"/>
      </div>

 



    </div>
  )
}
