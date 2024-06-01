import React, { useState } from 'react'
import Language from './icons/program.png';
import './styles/homepage.css'
import { Link } from 'react-router-dom';
import ProjectHomepage from './pages/homepage/ProjectHomepage';
import LogoMongo from './icons/icons8-mongo-db-48.png';
import LogoExpress from './icons/icons8-express-js-50.png';
import LogoJava from './icons/icons8-java-48.png';
import LogoReact from './icons/icons8-react-native-64.png';
import LogoNet from './icons/icons8-.net-framework-48.png';
import LogoTailwind from './icons/icons8-tailwind-css-96.png';
import LogoBootstrap from './icons/icons8-bootstrap-96.png';

function Homepage() {
    const [search,setSearch]= useState();
    
  return (
    <div className='bg-[whitesmoke] homepage-container'>
            <div className='cover-image'> </div>
            
            <div className='separator-container'></div>
            <div className='link-bar-nav'>
                <Link to="/" className="logo">Projects</Link>
                <Link to="/" className="logo">News</Link>
                <Link to="/" className="logo">Pricing</Link>
                <Link to="/" className="logo">Contact</Link>
            </div>
        <div className='programming-language flex flex-wrap'>
            <div className='search p-20'>
                <h1>Professional Website for every business</h1>
                <h4>We create websites and web applications for every request</h4>
                <div className='flex gap-4'>
                    <input type="text" 
                        className='search-input-homepage shadow-lg w-80'
                        placeholder="Search category" 
                        value={search}
                        onChange={ev => setSearch(ev.target.value)}/>
                    <button type='button' className='btn btn-warning text-white shadow-lg'>Search</button>
                </div>
            </div>
            <div className='language-img float-right m-auto'>
                <img  src={Language} alt='react' className=' float-right m-auto'/>
            </div>
        </div>
        <h1 className='text-center font-bold'>My projects</h1>
        <div className='homepage-projects-display'>
            <ProjectHomepage/>
            <ProjectHomepage/>
            <ProjectHomepage/>
            <ProjectHomepage/>
   
            <button type='button' className='btn btn-warning text-white shadow-lg m-auto'>View more</button>
        </div>
        <img className='random-logo-img img1' src={LogoReact} alt="random-logo"/>
        <img className='random-logo-img img2' src={LogoExpress}  alt="random-logo"/>
        <img className='random-logo-img img3' src={LogoMongo}  alt="random-logo"/>
        <img className='random-logo-img img4' src={LogoNet}  alt="random-logo"/>
        <img className='random-logo-img img5' src={LogoJava}  alt="random-logo"/>
        <img className='random-logo-img img6' src={LogoBootstrap}  alt="random-logo"/>
        <img className='random-logo-img img7' src={LogoTailwind}  alt="random-logo"/>
    </div>
  )
}

export default Homepage