import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Header'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {useState} from "react";
import Footer from './Footer';



function Layout() {

  const [toggleDarkMode, setToggleDarkMode] = useState(false);
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };
  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? 'dark' : 'light',
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#f48fb1',
      },
     // add other properties here…
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    
    <main>
        <Header toggleDarkMode={toggleDarkMode} toggleDarkTheme={toggleDarkTheme}/>
  
        <Outlet/>

        <Footer/>
    </main>
    </ThemeProvider>
  )
}

export default Layout