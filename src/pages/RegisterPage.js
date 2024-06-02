import React, { useState } from 'react'
import '../styles/login.css'
import { showNotification } from '../utils/NotificationMan.js';
import Form from 'react-bootstrap/Form';

function RegisterPage() {
  const [username,setUsername]=useState('');
  const [password, setPassword] = useState('');

  async function register(ev) {

    ev.preventDefault();
    const response = await fetch(process.env.REACT_APP_API+'/register', {
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type':'application/json'},
    });
    if (response.status === 200) {
      showNotification("success",'Register','Registration successful');
    } else {
      showNotification('danger','failed','registration failed');
    }
  }
  return (
    <form onSubmit={register} className='register index-posts'>
      <h1>Register</h1>
      <Form.Group className="mb-3" >
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" 
            value={username}
            onChange={ev => setUsername(ev.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
            value={password}
            onChange={ev => setPassword(ev.target.value)}/>
      </Form.Group>
      
      <button  className="btn btn-secondary">Register</button>
    </form>
  )
}

export default RegisterPage