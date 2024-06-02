/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Layout from './Layout';
import IndexPage from './pages/posts/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { UserContextProvider} from "./UserContext";
import CreatePost from './pages/posts/CreatePost';
import PostPage from "./pages/posts/PostPage";
import EditPost from "./pages/posts/EditPost";
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminPanel from './pages/admin/AdminPanel';
import LayoutAdmin from './LayoutAdmin';
import Dashboard from './pages/admin/Dashboard';
import AdminPosts from './pages/admin/AdminPosts';
import Homepage from './pages/homepage/Homepage';
import EditProject from './pages/projects/EditProject';
import Unauthorized from './Unauthorized';
import Contact from './pages/Contact';
import IndexProjects from './pages/projects/IndexProjects';



// Define roles in a constant or enum
export const ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  GUEST: 'guest',
  SUPERADMIN: 'superadmin',
};

function App() {
   
  return (
    <UserContextProvider>
       <ReactNotifications />
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Homepage/>}/>
          <Route path='/unauthorized' element={<Unauthorized/>}/>
          <Route path='/posts' element={<IndexPage/>}/>
          <Route path='/projects' element={<IndexProjects/>}/>
          <Route path='/Login' element={<LoginPage/>}/>
          <Route path='/Register' element={<RegisterPage/>}/>
          <Route path='/Create'  element={<CreatePost/>}/>
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/edit/:id" element={<EditPost />} />
            <Route path='/admin/' element={<LayoutAdmin/>}> 
            <Route index element={<Dashboard/>}/>
            <Route path='/admin/users' element={<AdminPanel/>}/>
            <Route path='/admin/posts' element={<AdminPosts/>}/> 
          </Route>         
          <Route path="/addproject" element={<EditProject />} />
        </Route>
      </Routes>
    </UserContextProvider>
    
  );
}

export default App;
