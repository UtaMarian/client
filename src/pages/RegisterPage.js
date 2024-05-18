import React, { useState } from 'react'
import '../styles/login.css'
import { showNotification } from '../NotificationMan.js';

function RegisterPage() {
  const [username,setUsername]=useState('');
  const [password, setPassword] = useState('');

  async function register(ev) {

    ev.preventDefault();
    const response = await fetch('http://localhost:4000/register', {
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
      <input placeholder='Username' 
            type="text" 
            value={username} 
            onChange={ev=>setUsername(ev.target.value)}/>
      <input placeholder='Password' 
            type="password" 
            value={password} 
            onChange={ev=>setPassword(ev.target.value)}/>
      {/* <input placeholder='Confirm password' type="password"/> */}
      <button>Register</button>
    </form>
  )
}

export default RegisterPage