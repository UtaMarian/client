import React, { useEffect, useState } from 'react'
import { showNotification } from '../../utils/NotificationMan';
import Table from 'react-bootstrap/Table';
import {formatISO9075} from "date-fns";
import { Navigate } from 'react-router-dom';

function AdminPosts() {
    const [posts,setPosts] = useState([]);


    useEffect(() => {
        fetch(process.env.REACT_APP_API+'/post', {
            credentials: 'include',
        }).then(response => {
        response.json().then(users => {
            setPosts(users);
        }).catch(err=>{
            console.log(err);
            showNotification("danger","Failed","Something went wrong");
        }
        );
        });
    }, []);
    const [redirect,setRedirect] = useState();
    
  if (redirect) {
    return <Navigate to={'/edit/'+redirect} />
  }

  function editPost(id){
    setRedirect(id);
  }
  async function deletePost(id){

    const data = new FormData();
    data.set('id',id);
    const delresponse = await fetch(process.env.REACT_APP_API+'/post/'+id, {
      method: 'DELETE',
      body: data,
      credentials: 'include',
    });
    if(delresponse){
        const updatedPosts = posts.filter(post => post._id !== id);
        setPosts(updatedPosts);
      showNotification("success","Deleted","Post was deleted");
    }else{
      showNotification("danger","Failed","Post was not deleted");
    }
  }
  return (
    <div className='box-shadow'>

    <Table responsive  hover striped >
    <thead >
      <tr >
        <th >Post</th>
        <th>Title</th>
        <th>User</th>
        <th>Created</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {posts.length > 0 && posts.map(post => (
      <tr>
        <td><img className='admin-post-img' src={process.env.REACT_APP_API+'/'+post.cover} alt="imagine_post"/> </td>
        <td className='admin-text-title'>{post.title}</td>
        <td>{post.author.username}</td>
        <td> <time> {formatISO9075(new Date(post.createdAt))}</time></td>
        <td>
            <button type='button' className='btn btn-info text-white mr-5'  onClick={() => editPost(post._id,true)}>Edit</button>
            <button style={{marginTop:'5px'}} className='btn btn-danger' onClick={() => deletePost(post._id,true)}>Delete</button>
        </td>

      </tr>))}
      
    </tbody>
  </Table>
  </div>
  )
}

export default AdminPosts