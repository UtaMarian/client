import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Link} from "react-router-dom";

function AppCarousel({posts}) {

  const highlights=posts;//.slice(0,3);

  return (
    <Carousel className='carousel-container'>
      
      {highlights.length > 0 && highlights.map(post => (
        <Carousel.Item interval={5000}>
          <Link to={'http://localhost:3000/post/'+post._id}>
            <img src={'http://localhost:4000/'+post.cover} alt=""/>
            <Carousel.Caption>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
       
    ))}
  </Carousel>

  )
}

export default AppCarousel