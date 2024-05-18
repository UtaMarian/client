import 'react-quill/dist/quill.snow.css';
import {useState} from "react";
import {Navigate} from "react-router-dom";
import Editor from "../Editor";
import '../styles/login.css'
import '../styles/createpost.css';
import { Store } from 'react-notifications-component';

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
      Store.addNotification({
        title: "Failed",
        message: "Your must complete all information about post",
        type: "info",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          pauseOnHover: true,
          onScreen: true
        }
      });
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
      const response = await fetch('http://localhost:4000/post', {
        method: 'POST',
        body: data,
        credentials: 'include',
      });
      if (response.ok) {
        //notification
        Store.addNotification({
          title: "Success",
          message: "The post was added",
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            pauseOnHover: true,
            onScreen: true
          }
        });
        setRedirect(true);
      }
      else{
         //notification
         Store.addNotification({
          title: "Failed",
          message: "Your post does not submited",
          type: "danger",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            pauseOnHover: true,
            onScreen: true
          }
        });
      }
    }
    
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (
   
    <form onSubmit={createNewPost} className="index-posts">
      <input type="title"
             placeholder={'Title'}
             value={title}
             onChange={ev => setTitle(ev.target.value)} />
      <input type="summary"
             placeholder={'Summary'}
             value={summary}
             onChange={ev => setSummary(ev.target.value)} />
      <input type="file"
             onChange={ev => setFiles(ev.target.files)} />
      
      <div>
        <div className='add-tags-div'>
        <input
          type="text"
          placeholder="Add tags"
          value={tagInput}
          onChange={handleTagInputChange}
        />
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

      <Editor value={content} onChange={setContent} />
      <button style={{marginTop:'5px'}}>Create post</button>
    </form>
    
  );
}