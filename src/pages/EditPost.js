import {useEffect, useState} from "react";
import {Navigate, useParams} from "react-router-dom";
import Editor from "../Editor";
import '../styles/createpost.css'
import { showNotification } from '../NotificationMan.js';
import Form from 'react-bootstrap/Form';

export default function EditPost() {
  const {id} = useParams();
  const [title,setTitle] = useState('');
  const [summary,setSummary] = useState('');
  const [content,setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect,setRedirect] = useState(false);
  const [toHome,settoHome] = useState(false);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');


  const handleTagInputChange = (event) => {
    setTagInput(event.target.value);
  };

  const handleAddTag = () => {
    const newTag = tagInput.trim();
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setTagInput(''); // Clear the tag input field
    }
  };

  const handleRemoveTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  useEffect(() => {
   
    fetch('http://localhost:4000/post/'+id)
      .then(response => {
        response.json().then(postInfo => {
          setTitle(postInfo.title);
          setContent(postInfo.content);
          setSummary(postInfo.summary);
          setTags(postInfo.tags);
        });
      });
  }, [id]);

  async function updatePost(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('id', id);
    data.set('tags', tags);
    if (files?.[0]) {
      data.set('file', files?.[0]);
    }
    if(!(title && summary && content)){
      //notification
      showNotification("info","Failed","Your must complete all information about post");
    }
    const response = await fetch('http://localhost:4000/post', {
      method: 'PUT',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      showNotification("success","Success","The post was added");
      setRedirect(true);
    }
    else{
      showNotification("danger","Failed","Your post does not modified");
    }
  }

  async function deletePost(ev){

    const data = new FormData();
    data.set('id',id);
    const delresponse = await fetch('http://localhost:4000/post/'+id, {
      method: 'DELETE',
      body: data,
      credentials: 'include',
    });
    if(delresponse){
      showNotification("success","Deleted","Post was deleted");
      settoHome(true);
      setRedirect(true);
    }else{
      showNotification("danger","Failed","Post was not deleted");
    }
  }
    
  if (redirect) {
    if(toHome){
      return <Navigate to={'/'} />
    }
    return <Navigate to={'/post/'+id} />
   
  }

  return (<>
    <form onSubmit={updatePost} className="index-posts">
    <Form.Group className="mb-3" >
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Post title" 
            value={title}
            onChange={ev => setTitle(ev.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Summary</Form.Label>
        <Form.Control type="text" placeholder="Post summary" 
            value={summary}
            onChange={ev => setSummary(ev.target.value)}/>
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" onChange={ev => setFiles(ev.target.files)} />
      </Form.Group>

      

    <div>
        <div className='add-tags-div'>
        <Form.Group className="mb-3" >
          <Form.Label>Tag</Form.Label>
          <Form.Control type="text" placeholder="Tag" 
               value={tagInput}
               onChange={handleTagInputChange}/>    
        </Form.Group>
        <button type="button" className='add-btn' onClick={handleAddTag}>+</button>
        </div>
        <div className='tags-container'>
          {tags.map((tag, index) => (
            <div key={index} className='button-10'>
              {tag}
              <button type="button" className='remove-btn' onClick={() => handleRemoveTag(index)}>
                x
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <Editor onChange={setContent} value={content} />
      <div className="form-buttons">
        <button style={{marginTop:'5px'}}>Update</button>
        
       </div>
    </form>
    <button style={{marginTop:'5px'}} c
    className="delete-button"
    onClick={deletePost}>
      Delete
    </button></>
  );
}