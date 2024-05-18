/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom'
import './App.css'
import {useContext, useEffect,useState} from "react";
import {UserContext} from "./UserContext";
import {  Switch } from "@mui/material"

function Header({ toggleDarkMode, toggleDarkTheme }) {

  const {setUserInfo,userInfo} = useContext(UserContext);


  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header className={toggleDarkMode ? 'app-navbar-white' : 'app-navbar-dark'}>
      
        <Link to="/" className="logo">Flash.UMI</Link>
        
        <nav>
        <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} className='switch-button'/>
          {username && (
          <>
            <Link to="/create">Create new post</Link>
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
  )
}

export default Header