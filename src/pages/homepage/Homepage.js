import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Language from '../../icons/program.png';
import '../../styles/homepage.css'
import ProjectHomepage from '../../pages/homepage/ProjectHomepage';
import LogoMongo from '../../icons/icons8-mongo-db-48.png';
import LogoExpress from '../../icons/icons8-express-js-50.png';
import LogoJava from '../../icons/icons8-java-48.png';
import LogoReact from '../../icons/icons8-react-native-64.png';
import LogoNet from '../../icons/icons8-.net-framework-48.png';
import LogoTailwind from '../../icons/icons8-tailwind-css-96.png';
import LogoBootstrap from '../../icons/icons8-bootstrap-96.png';
import { showNotification } from '../../utils/NotificationMan';
import ReactLoading from 'react-loading';

function Homepage() {
    const [search,setSearch]= useState();
    const [projects,setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(process.env.REACT_APP_API+'/projects').then(response => {
          response.json().then(response  => {
            setProjects(response);
            setLoading(false);
          });
        }).catch(e=>{
            showNotification("danger","Verify network connection","The projects was not loaded")
        });
        
      }, []);
  return (
    <div className='bg-[whitesmoke] homepage-container'>
         {loading ? (
        <ReactLoading type={"spinningBubbles"} color={"#fcdb03"} height={367} width={200} className='center m-auto'/>
      ) : (<>
        <div className='cover-image'> </div>
        <div className='separator-container'></div>
        <div className='link-bar-nav'>
            <Link to="/projects" className="logo">Projects</Link>
            <Link to="/posts" className="logo">News</Link>
            <Link to="/" className="logo">Pricing</Link>
            <Link to="/contact" className="logo">Contact</Link>
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
        {projects.length > 0 && projects.map(project => (
            <ProjectHomepage  {...project}/>
        ))}
        <Link to='/projects' className='m-auto'>
            <button type='button' className='btn btn-warning text-white shadow-lg ' >View more</button></Link>
        </div>
        <img className='random-logo-img img1 fade-in' src={LogoReact} alt="random-logo"/>
        <img className='random-logo-img img2 fade-in' src={LogoExpress}  alt="random-logo"/>
        <img className='random-logo-img img3 fade-in' src={LogoMongo}  alt="random-logo"/>
        <img className='random-logo-img img4 fade-in' src={LogoNet}  alt="random-logo"/>
        <img className='random-logo-img img5 fade-in' src={LogoJava}  alt="random-logo"/>
        <img className='random-logo-img img6 fade-in' src={LogoBootstrap}  alt="random-logo"/>
        <img className='random-logo-img img7 fade-in' src={LogoTailwind}  alt="random-logo"/>
        </>)}
    </div>
  )
}

export default Homepage