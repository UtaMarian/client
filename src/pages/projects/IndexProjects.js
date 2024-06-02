import {useEffect, useState} from "react";
import '../../styles/project.css';
import { showNotification } from "../../utils/NotificationMan";

function IndexProjects() {
    const [projects,setProjects] = useState([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_API+'/projects').then(response => {
          response.json().then(response  => {
            setProjects(response);
          });
        }).catch(e=>{
            showNotification("danger","Verify network connection","The projects was not loaded")
        });;
      }, []);

  return (
    <div className="flex gap-10 p-20 bg-[#f5f5f5] project-body">
        
        {projects.length > 0 && projects.slice(0, 4).map(project => (
        <div className="project-index">
            <img src={process.env.REACT_APP_API+`/`+project.images} alt='cover' className="image-project"/>
            <p className="text-title">{project.title}</p>
        </div>
      ))}
    </div>
  )
}

export default IndexProjects