import React from 'react'
import '../../styles/homepage.css';

function ProjectHomepage({_id,title,tags,images,description}) {
  return (
    <div className='project-card-home'>
        <h1>{title}</h1>
        <h4>{description}</h4>
        <div className='website-tag'>
        {tags.length > 0 && tags.map(tag => (
            <p>{tag}</p>
        ))}
        </div>
        <img className='project-img-cover' src={process.env.REACT_APP_API+`/`+images} alt="project-cover"/>
    </div>
  )
}

export default ProjectHomepage