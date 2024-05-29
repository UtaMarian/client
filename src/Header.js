/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom'
import './App.css'
import {useContext, useEffect} from "react";
import {UserContext} from "./UserContext";
import {  Switch } from "@mui/material"


function Header({ toggleDarkMode, toggleDarkTheme }) {

  const {setUserInfo,userInfo} = useContext(UserContext);


  useEffect(() => {
    fetch(process.env.REACT_APP_API+'/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, [setUserInfo]);

  function logout() {
    fetch(process.env.REACT_APP_API+'/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;
  const role= userInfo?.role;

  return (
    <div className='header-shadow shadow-sm'>
    <header className={toggleDarkMode ? 'app-navbar-white' : 'app-navbar-dark'}>
      
        <Link to="/" className="logo">Flash.UMI</Link>
        <nav>
         <Switch checked={toggleDarkMode}  className='switch-button' /> {/*onChange={toggleDarkTheme} */}
        {role==="superadmin" && (
          <>
            <Link to="/admin">Admin</Link>
            <Link to="/addproject">Add project</Link>
          </>

        )}
         <Link to="/posts" >Posts</Link>
        {username && (
        <>
          <Link to="/create">Add post</Link>
         
          <a onClick={logout}>Logout ({username})</a>
        </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
        </nav>
      </header>
    
    </div>
  )
}

export default Header