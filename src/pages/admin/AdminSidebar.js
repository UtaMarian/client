
import { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoStatsChart } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

function AdminSidebar() {
  
  const [collapsed, setCollapsed] = useState(false);

  const handleColapse=() =>{
    setCollapsed(!collapsed);

  }
  return (

    <Sidebar
        collapsed={collapsed}
        image="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg"
        breakPoint="md"
        backgroundColor={hexToRgba("#ffffff",0.9)}
        rootStyle="#607489"
      >
      <Menu  menuItemStyles={{
        root: {
          fontSize: '17px',
          fontWeight: 600,

        },
        icon: {
          color: '#0098e5',
          
        },
        button: ({ level, active, disabled }) => {
          if (level === 0)
            return {
              color: disabled ? '#9fb6cf' : '#44596e',
              backgroundColor: active ? '#c5e4ff' : undefined,
            };
        },
 

      }}>
        <MenuItem icon={<IoMenu />} onClick={handleColapse}/>
        <MenuItem active component={<Link to="/admin" />} icon={<AiOutlineDashboard />}> Dashboard </MenuItem>
        <MenuItem  component={<Link to="/admin/users" />} icon={<FaUser />}> Users</MenuItem>
        <MenuItem  component={<Link to="/admin/posts" />} icon={<FaRegNewspaper />}> Posts </MenuItem>
        <MenuItem disabled icon={<FaProjectDiagram />}> Projects </MenuItem>
        <MenuItem disabled icon={<MdContactMail />}> Contact </MenuItem>
        <MenuItem disabled icon={<IoStatsChart />}> Stats </MenuItem>
      </Menu>
    </Sidebar>

  )
}

export default AdminSidebar