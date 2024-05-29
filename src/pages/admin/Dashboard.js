import React from 'react'
import '../../styles/admin.css';
import { FaUser } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { FaRegNewspaper } from "react-icons/fa";
import { FaTags } from "react-icons/fa6";
import LogsHistory from './LogsHistory';
import AdminChart from './AdminChart';

function Dashboard() {
  return (

    <div className='dashboard'>

     <div className='dashboard-cards flex flex-wrap justify-between'>
          <div className='dash-card'>
               <div className='icon-card-box bg-[#ff9800]'>
               <FaRegNewspaper />
               </div>
               <div className='card-right-text'>
                    <p>Blogs</p>
                    <span>5</span>
               </div>
               <div className='mt-20 admin-text-title"'>
                    Total blogs in website
               </div>
               
          </div>

          <div className='dash-card'>
               <div className='icon-card-box bg-[#166534]'>
                    <FaUser />
               </div>
               <div className='card-right-text'>
                    <p>Users</p>
                    <span>10</span>
               </div>
               <div className='mt-20 '>
                    Total users in App
               </div>
            
          </div>
    
          <div className='dash-card'>
               <div className='icon-card-box bg-[#1d4ed8]'>
                    <GoProjectRoadmap />
               </div>
               <div className='card-right-text'>
                    <p>Projects</p>
                    <span>2</span>
               </div>
               <div className=' mt-20'>
                Total projects created
               </div>
          </div>
       
          <div className='dash-card'>
          <div className='icon-card-box bg-midnight'>
               <FaTags />
          </div>
          <div className='card-right-text'>
               <p>Tags</p>
               <span>130</span>
          </div>
          <div className='mt-20'>
               Total tags in website
          </div>
          </div>
     </div>
     <div className='flex flex-wrap  gap-4'>
          <div className='dashboard-container p-4 min-w-72 max-w-sm'><LogsHistory/></div>
          <div className='dashboard-container  p-4 min-w-2xl'> <AdminChart/></div>
     </div>
    </div>

  )
}

export default Dashboard