import React, { useContext, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './Main.css';
import addTaskIcon from '../Asset/icon/icons8-add-properties-48.png'
import taskPlanning from '../Asset/icon/icons8-task-planning-48.png'
import taskCompleted from '../Asset/icon/icons8-task-completed-48.png'
import logOutIcon from '../Asset/icon/logout2.png';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import menubar from '../Asset/icon/menubar.png'
import nightMode from '../Asset/icon/icons8-night-mode-32.png'

const Main = () => {
     const { logOut, user } = useContext(AuthContext)
     const navigate = useNavigate();
         

     const userLogOut = () => {
          logOut()
               .then(() => {
                    navigate('/login')
               })
               .catch(err => {
                    console.error(err)
               })
     }
     return (
          <div className='main flex justify-center items-center py-10' >
               <div className='max-w-4xl w-full h-full mx-3 lg:mx-0 rounded-md inner-card overflow-y-auto'>
                    <div className="drawer drawer-mobile ">
                         <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                         <div className="drawer-content p-5 mt-3">
                              {/* <!-- Page content here --> */}
                              <div className=' flex justify-end gap-4 items-center'>
                                   <label className='float-right cursor-pointer'><img className='w-5' src={nightMode} alt="" /></label>
                                   <label htmlFor="my-drawer-2" className="float-right drawer-button lg:hidden cursor-pointer"><img className='w-8' src={menubar} alt="" /></label>
                              </div>
                              <Outlet></Outlet>
                         </div>
                         <div className="drawer-side ">
                              <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
                              <ul className="menu p-4 w-60 sidebar">
                                   {/* <!-- Sidebar content here --> */}
                                   <div className='text-center pt-4 relative'>
                                        <div className='border-2 border-rose-500 w-14 h-14 inline-block rounded-full'><img className='w-full rounded-full' src={user?.photoURL} alt="user" /></div>
                                        <p className='mt-3 mb-5 text-sm'>{user?.displayName}</p>
                                        {
                                             user && <div title='sign out' onClick={userLogOut} className='absolute right-1 top-1  p-1 rounded-full hover:bg-gray-300 cursor-pointer'><img className='w-5' src={logOutIcon} alt="" /></div>
                                        }
                                   </div>
                                   <li className='font-semibold'><Link to='/addTask'><img className='w-8' src={addTaskIcon} alt="" /> Add Task</Link></li>
                                   <li className='font-semibold'><Link to={'/myTask'}><img className='w-8' src={taskPlanning} alt="" />My Task</Link></li>
                                   <li className='font-semibold'><Link to={'/completedTask'}><img className='w-8' src={taskCompleted} alt="" />completed Task</Link></li>
                              </ul>

                         </div>
                    </div>

               </div>
          </div>
     );
};

export default Main;