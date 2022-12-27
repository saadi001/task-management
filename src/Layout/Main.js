import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Main.css';
import addTaskIcon from '../Asset/icon/icons8-add-properties-48.png'
import taskPlanning from '../Asset/icon/icons8-task-planning-48.png'
import taskCompleted from '../Asset/icon/icons8-task-completed-48.png'

const Main = () => {
     return (
          <div className='main flex justify-center items-center py-10' >
               <div className='max-w-4xl w-full h-full mx-3 lg:mx-0 rounded-md inner-card overflow-y-auto'>
                    <div className="drawer drawer-mobile ">
                         <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                         <div className="drawer-content p-5">
                              {/* <!-- Page content here --> */}
                              <Outlet></Outlet>
                              <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                         </div>
                         <div className="drawer-side bg-slate-50 sidebar">
                              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                              <ul className="menu p-4 w-60 ">
                                   {/* <!-- Sidebar content here --> */}                                   
                                   <div className='text-center'>
                                        <span className='border w-12 h-12 inline-block rounded-full'>hello</span>
                                        <p className='mt-3 mb-5 text-sm'>sheikhsadi@gmail.com</p>
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