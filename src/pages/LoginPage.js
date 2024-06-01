import {useContext, useState} from "react";
import {Navigate} from "react-router-dom";
import {UserContext} from "../UserContext";
import Form from 'react-bootstrap/Form';
import '../styles/login.css'

function LoginPage() {

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [redirect,setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);

  async function login(ev) {
    ev.preventDefault();
    console.log(process.env.REACT_APP_SERVER);
    const response = await fetch(process.env.REACT_APP_API+'/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });
    if (response.ok) {
      response.json().then(userInfo => {
        
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert('wrong credentials');
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <form onSubmit={login} className='login index-posts' >
      <h1>Login</h1>
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
      
      <button  className="btn btn-secondary">Login</button>
    </form>
  )
}

export default LoginPage