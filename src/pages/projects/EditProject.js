import React, { useState } from 'react'
import { showNotification } from '../../NotificationMan';
import Form from 'react-bootstrap/Form';
import MarkdownEditor from '@uiw/react-markdown-editor';


const ProjectState = {
  title: '',
  description: '',
  content: '',
  startDate: Date.now(),
  endDate: null,
  category: '',
  images: '',
  status: '',
  linkWebsite: '',
  linkGithub: '',
  tags: [],
};

function EditProject() {

  const [project,setProject]= useState(ProjectState);
  const [tagInput, setTagInput] = useState('');
  const [redirect,setRedirect] = useState(false);
  const [toHome,settoHome] = useState(false);

  const handleTagInputChange = (event) => {
    setTagInput(event.target.value);
  };

  const handleAddTag = () => {
    const newTag = project.tagInput.trim();
    if (newTag && !project.tags.includes(newTag)) {
      setProject({
        ...project,
        tags: [...project.tags, newTag],
        tagInput: '' 
      });
    }
  };
  
  const handleRemoveTag = (indexToRemove) => {
    setProject({
      ...project,
      tags: project.tags.filter((_, index) => index !== indexToRemove)
    });
  };
  
  return (
    <form  className="index-posts">
      <Form.Group className="mb-3" >
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Post title" 
            value={project.title}
            onChange={ev => setProject({...project,title:ev.target.value})}/>
      </Form.Group>
    <Form.Group className="mb-3" >
      <Form.Label>Description</Form.Label>
      <Form.Control type="text" placeholder="Post summary" 
          value={project.description}
          onChange={ev => setProject({...project,description:ev.target.value})}/>
    </Form.Group>
    <Form.Group  className="mb-3">
      <Form.Label>Image</Form.Label>
      <Form.Control type="file" onChange={ev => setProject({...project,images:ev.target.value})}/>
    </Form.Group>
    <Form.Group  className="mb-3">
      <Form.Label>Start Date</Form.Label>
      <Form.Control type="date"  onChange={ev => setProject({...project,startDate:ev.target.value})}/>
    </Form.Group>
    <Form.Group  className="mb-3">
      <Form.Label>End Date</Form.Label>
      <Form.Control type="date" onChange={ev => setProject({...project,endDate:ev.target.value})}/>
    </Form.Group>
    <Form.Group  className="mb-3">
      <Form.Label>Status</Form.Label>
      <Form.Select   onChange={ev => setProject({...project,status:ev.target.value})}>
          <option value="progress">In progress</option>
          <option value="finished">Finished</option>
          <option value="published">Publish</option>
          <option value="planned">Planned</option>
        </Form.Select>
    </Form.Group>
    <Form.Group  className="mb-3">
      <Form.Label>Website link</Form.Label>
      <Form.Control type="text" onChange={ev => setProject({...project,category:ev.target.value})}/>
    </Form.Group>
    <Form.Group  className="mb-3">
      <Form.Label>GitHub link</Form.Label>
      <Form.Control type="text" onChange={ev => setProject({...project,category:ev.target.value})}/>
    </Form.Group>
    <Form.Group  className="mb-3">
      <Form.Label>Category</Form.Label>
      <Form.Control type="text" onChange={ev => setProject({...project,category:ev.target.value})}/>
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
        {project.tags.map((tag, index) => (
          <div key={index} className='button-10'>
            {tag}
            <button type="button" className='remove-btn' onClick={() => handleRemoveTag(index)}>
              x
            </button>
          </div>
        ))}
      </div>
    </div>
    <Form.Group className="mb-3" >
      <Form.Label>Content</Form.Label>
      <MarkdownEditor
        value={project.content}
        onChange={(value, viewUpdate) => {
          setProject({...project,content:value})
        }}
      />
      </Form.Group>

    <button style={{marginTop:'5px'}}>Add project</button>
    {/* <MarkdownEditor.Markdown source={project.content} height="200px" /> */}
  </form>
  )
}

export default EditProject