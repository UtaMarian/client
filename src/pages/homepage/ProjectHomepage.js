import React from 'react'
import '../../styles/homepage.css';

function ProjectHomepage() {
  return (
    <div className='project-card-home'>
        <h1>FLASH.UMI</h1>
        <h4>Portfolio website</h4>
        <div className='website-tag'>
            <p>React</p>
            <p>NodeJs</p>
            <p>ExpressJs</p>
            <p>MongoDB</p>
            <p>Bootstrap</p>
            <p>Tailwind</p>
        </div>
        <img className='project-img-cover' src="https://independentoxford.com/wp-content/uploads/2020/06/website.jpg" alt="project-cover"/>
    </div>
  )
}

export default ProjectHomepage