/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import {UserContextProvider} from "./UserContext";
import CreatePost from './pages/CreatePost';
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";
import { ReactNotifications } from 'react-notifications-component'

import 'react-notifications-component/dist/theme.css'

function App() {
  return (
    <UserContextProvider>
       <ReactNotifications />
      <Routes>
     
        <Route path='/' element={<Layout/>}>
          <Route index element={<IndexPage/>}/>
          <Route path='/Login' element={<LoginPage/>}/>
          <Route path='/Register' element={<RegisterPage/>}/>
          <Route path='/Create' element={<CreatePost/>}/>
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Route>
      </Routes>
    </UserContextProvider>
    
  );
}

export default App;
