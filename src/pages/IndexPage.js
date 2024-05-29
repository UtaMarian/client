import {useEffect, useState} from "react";
import Post from '../Post'
import AppCarousel from "./AppCarousel";
import Form from 'react-bootstrap/Form';
import { showNotification } from "../NotificationMan";

function IndexPage() {

    const [posts,setPosts] = useState([]);
    const [word,setWord]=useState();

   
    async function searchHandler(ev) {

      const response = await fetch(process.env.REACT_APP_API+'/search?'+
      new URLSearchParams({
        word: word
    }), {
        method: 'GET',
        credentials: 'include',
      });
      if(response.ok){
        response.json().then(pos=>{
          if(pos.length===0)
            showNotification("warning","Not found","The post that you have been searched was not found");
          setPosts(pos);
        })
      }else{
        showNotification("danger","Oops","Something was wrong");
      }
      
    
    }

    useEffect(() => {
      fetch(process.env.REACT_APP_API+'/post').then(response => {
        response.json().then(posts => {
         
          setPosts(posts);
        });
      });
    }, []);

  return (<>
    <Form className='search-form'>
        <Form.Group className="mb-3" controlId="search">
            <Form.Control type="tex" placeholder="Search any post or tag" 
             value={word}
             onChange={ev => setWord(ev.target.value)}/>
      </Form.Group>
      <button type='button' className='btn btn-secondary' onClick={searchHandler}>Search</button>
    </Form>
    <AppCarousel posts={posts}/>
    <div className="index-posts">
      {posts.length > 0 && posts.map(post => (
        <Post {...post} />
      ))}
    </div>
    </>
  )
}

export default IndexPage