import React from 'react';
import { useState } from 'react';
import './about.css';
import Accordion from 'react-bootstrap/Accordion';
import Spinner from 'react-bootstrap/Spinner';

import Navbar from '../components/Navbar';


export default function About() {

  const [count, setCount] = useState(0);

  const increment = () =>{
    setCount(count+1);
  }

  const decrement = () =>{
    setCount(count-1);
  }

  return (
    <div>
      <Navbar/>
      <br></br>
      <p>The count is {count}</p>
      <button onClick={increment} className='button1'>+</button>
      <button onClick={decrement} className='button1'>-</button>



      <h2 className='about-title'>This is About Us page</h2>

        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Option 1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Option 2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>


    <div style={{ display: 'flex', gap: '100px', marginTop: '20px', marginLeft: '65px', marginBottom: '25px' }}>
        
        <Spinner animation="grow" variant="dark" />
        <Spinner animation ="grow" variant="danger" />
        <Spinner animation="grow" variant="dark" />
        <Spinner animation ="grow" variant="danger" />
        <Spinner animation="grow" variant="dark" />
        <Spinner animation ="grow" variant="danger" />
        <Spinner animation="grow" variant="dark" />
        <Spinner animation ="grow" variant="danger" />
        <Spinner animation="grow" variant="dark" />
        

        </div>



    </div>
  )
}
