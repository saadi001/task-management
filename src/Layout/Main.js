import React, { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './Main.css';
import addTaskIcon from '../Asset/icon/icons8-add-properties-48.png'
import taskPlanning from '../Asset/icon/icons8-task-planning-48.png'
import taskCompleted from '../Asset/icon/icons8-task-completed-48.png'
import logOutIcon from '../Asset/icon/logout.png';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const Main = () => {
     const {logOut,user} = useContext(AuthContext)
     const navigate = useNavigate();

     const userLogOut = () =>{
          logOut()
          .then(()=>{
          navigate('/login')
          })
          .catch(err=>{
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
                              <Outlet></Outlet>
                              <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                         </div>
                         <div className="drawer-side bg-slate-50 sidebar">
                              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                              <ul className="menu p-4 w-60 ">
                                   {/* <!-- Sidebar content here --> */}                                   
                                   <div className='text-center pt-4 relative'>
                                        <div className='border w-14 h-14 inline-block rounded-full'><img src="" alt="user" /></div>
                                        <p className='mt-3 mb-5 text-sm'>{user?.email}</p>
                                        <div title='sign out' onClick={userLogOut} className='absolute right-1 top-1  p-1 rounded-full hover:bg-slate-300 cursor-pointer'><img className='w-5' src={logOutIcon} alt="" /></div>
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