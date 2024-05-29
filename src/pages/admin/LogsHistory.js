import React, { useEffect, useState } from 'react'
import {  FaUser } from 'react-icons/fa';
import { VscWorkspaceUnknown } from "react-icons/vsc";
import { FaRegNewspaper } from "react-icons/fa";
import { SlLogin } from "react-icons/sl";
import { MdOutlineAccountCircle } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const LogEntry = ({ icon, title, date}) => {

    
    const icons = {
        'user': FaUser,
        'blog': FaRegNewspaper,
        'login': SlLogin,
        'register': MdOutlineAccountCircle,
        'deleted': MdDeleteForever,
        'default': VscWorkspaceUnknown
      };
      
    const colors = {
        'user': '#e82464',
        'blog': '#3874e4',
        'login': '#f88c2c',
        'register': '#50ac54',
        'deleted': '#f8443c',
        'default': 'black'
      };
      const IconComponent = icons[icon] || icons['default'];
    return (
      <div className="flex items-center mb-4 log-entry">
        <div className="mr-4 icon-logs" style={{ backgroundColor: colors[icon] || colors['default'] }}>
            <IconComponent />
        </div>
        <div>
          <h3 className="admin-text-title">{title}</h3>
          <p className="admin-text-subtitle">{date}</p>
        </div>
       
      </div>
    );
  };

  
function LogsHistory() {
    const logstemplates = [
        {  id: 1,icon: 'deleted', title: 'Blog was deleted', date: 'May 20, 2024' },
        {  id: 2,icon: 'blog', title: 'Blog created', date: 'May 22, 2024' },
        {  id: 3,icon: 'login', title: 'User Logged in', date: 'May 25, 2024' },
        {  id: 4,icon: 'register', title: 'A new user was register', date: 'May 25, 2024' },
        {  id: 5,icon: 'delet', title: 'Error occurred  ', date: 'May 25, 2024' },
      ];
    const [logs, setLogs] = useState(logstemplates);
   

    useEffect(() => {
    const interval = setInterval(() => {
        setLogs((prevLogs) => {
        const newLog = { id:Date.now(),icon: 'user', title: 'New Log', date: new Date().toLocaleString() };
        return [newLog, ...prevLogs.slice(0, 4)]; 
        });
    }, 10000); 

    return () => clearInterval(interval);
    }, [logs]);
    

  return (
    <div className="container mx-auto py-1">
      <h2 className=" mt-0 mb-4 admin-text-title">Logs History</h2>
      <div className="flex flex-col  logs-container">
        {logs.map((log, index) => (
            <LogEntry key={index} {...log} />
        ))}
        
      </div>
    </div>
  )
}

export default LogsHistory