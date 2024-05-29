import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { showNotification } from '../../NotificationMan.js';
import Form from 'react-bootstrap/Form';

function AdminPanel() {

const [users,setUsers] = useState([]);


useEffect(() => {

    fetch(process.env.REACT_APP_API+'/users', {
        credentials: 'include',
      }).then(response => {
      response.json().then(users => {
        setUsers(users);
      }).catch(err=>{
        console.log(err);
        showNotification("danger","Failed","Something went wrong");
      }
      );
    });
  }, []);

  async function enableUser(id,isEnable){
    const enableRes = await fetch(process.env.REACT_APP_API+'/user/enable/'+id, {
      method: 'PUT',
      credentials: 'include',
    });
    if(enableRes.ok){
      const updatedUsers = users.map(user =>
        user._id === id ? { ...user, isEnable: isEnable } : user
      );
      setUsers(updatedUsers);
      showNotification("success","Success","User was enabled");
    }else{
      showNotification("danger","Failed","User it s still disabled");
    }
  }

  async function disableUser(id,isEnable){
    const enableRes = await fetch(process.env.REACT_APP_API+'/user/disable/'+id, {
      method: 'PUT',
      credentials: 'include',
    });
    if(enableRes.ok){
      const updatedUsers = users.map(user =>
        user._id === id ? { ...user, isEnable: isEnable } : user
      );
      setUsers(updatedUsers);
      showNotification("warning","Success","User was disabled");
    }else{
      showNotification("danger","Failed","User it s still enabled");
    }
  }

async function updateUser(id, field, value) {
  try {
    const res = await fetch(process.env.REACT_APP_API+`/user/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ [field]: value }),
      credentials: 'include',
    });

    if (res.ok) {
      const updatedUsers = users.map(user => (user._id === id ? { ...user, [field]: value } : user));
      setUsers(updatedUsers);
      showNotification('success', 'Success', `User ${field} updated successfully`);
    } else {
      showNotification('danger', 'Failed', `Failed to update user ${field}`);
    }
  } catch (error) {
    console.error('Error updating user:', error);
    showNotification('danger', 'Failed', 'Something went wrong');
  }
}

  function handleRoleChange(user_id,selectedRole){
    updateUser(user_id, 'role', selectedRole);
  }

  return (
    <div className='box-shadow'>

    <Table responsive  hover striped>
    <thead className='table-header-custom'>
      <tr>
        <th>Id</th>
        <th>Username</th>
        <th>Role</th>
        <th>IsEnabled</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {users.length > 0 && users.map(user => (
      <tr key={user._id}>
        <td>{user._id}</td>
        <td>{user.username}</td>
        <td>
        <Form.Select value={user.role}  onChange={e => handleRoleChange(user._id, e.target.value)}>
          <option value="user">User</option>
          <option value="moderator">Moderator</option>
          <option value="admin">Admin</option>
          <option value="superadmin">Super Admin</option>
        </Form.Select>
        </td>
        <td>{user.isEnable&& <p>Yes</p>} {!user.isEnable&& <p>No</p>}</td>
        <td>
            {!user.isEnable&&<button type='button' className='btn btn-success'  onClick={() => enableUser(user._id,true)}>Enable</button>}
            {user.isEnable&&<button type='button' className='btn btn-danger'onClick={() => disableUser(user._id,false)}>Disable</button>}
        </td>

      </tr>))}
      
    </tbody>
  </Table>
  </div>
  )
}

export default AdminPanel