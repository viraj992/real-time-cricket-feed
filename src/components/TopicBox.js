import React from 'react';
import './topicbox.css';

export default function TopicBox(props) {
    

  return (
    <div>
      <div className="topicBox">
      <span className="text">my favourite food is {props.food} and price is {props.price} </span>
       {props.children}
    </div>

    </div>
  )
}
