/* eslint-disable jsx-a11y/anchor-is-valid */
import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";
import './App.css'
import '../node_modules/@syncfusion/ej2-layouts/styles/material.css';

function Post({_id,title,summary,cover,content,createdAt,author}) {
  return (
    <div className="post">
    <div className="post-image">
        <Link to={`/post/${_id}`}>
          <img src={process.env.REACT_APP_API+'/'+cover} alt=""/>
        </Link>
    </div>
    <div className="post-text">
     <Link to={`/post/${_id}`}>
      <h2>{title}</h2>
      </Link> 
      <p className="post-info">
        <a href="#" className="post-author">{author.username}</a>
        <time> {formatISO9075(new Date(createdAt))}</time>
      </p>
      <p className="post-summary">{summary}</p>
      
    </div>
  </div>
  )
}


export default Post