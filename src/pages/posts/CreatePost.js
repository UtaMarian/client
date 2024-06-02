import 'react-quill/dist/quill.snow.css';
import {useState} from "react";
import {Navigate} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import '../../styles/login.css';
import '../../styles/createpost.css';
import { showNotification } from '../../utils/NotificationMan.js';
import MarkdownEditor from '@uiw/react-markdown-editor';

export default function CreatePost() {
  const [title,setTitle] = useState('');
  const [summary,setSummary] = useState('');
  const [content,setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);

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


  async function createNewPost(ev) {

    if(!(title && summary && content && files[0])){
      //notification
      showNotification("info","Failed","Your must complete all information about post");
      ev.preventDefault();
    }
    else{
      const data = new FormData();
      data.set('title', title);
      data.set('summary', summary);
      data.set('content', content);
      data.set('tags',tags);
      data.set('file', files[0]);
      ev.preventDefault();
      const response = await fetch(process.env.REACT_APP_API+'/post', {
        method: 'POST',
        body: data,
        credentials: 'include',
      });
      if (response.ok) {
        //notification
        showNotification("success","Success","The post was added");
        setRedirect(true);
      }
      else{
         //notification
         showNotification("danger","Failed","Your post was not created");
      }
    }
    
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (
   
    <form onSubmit={createNewPost} className="index-posts">

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

      {/* <Editor value={content} onChange={setContent} /> */}
      <MarkdownEditor
        value={content}
        onChange={(value, viewUpdate) => {
          setContent(value)
        }}
      />
      <button style={{marginTop:'5px'}}>Create post</button>
    </form>
    
  );
}