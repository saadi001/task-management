import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../pages/Home/sidebar/Sidebar';
import './Main.css';


const Main = () => {
     return (
          <div className='main flex justify-center items-center py-10' >
               <div className='max-w-4xl w-full h-full rounded-md inner-card overflow-y-auto'>
               <div className="drawer drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content ">
                         {/* <!-- Page content here --> */}
                         <Outlet></Outlet>
                         <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    </div>
                    <div className="drawer-side border">
                         <label htmlFor="my-drawer-2" className="drawer-overlay"></label>                    
                         <ul className="menu p-4 w-60">
                              {/* <!-- Sidebar content here --> */}
                              <li><a>Sidebar Item 1</a></li>
                              <li><a>Sidebar Item 1</a></li>
                              <li><a>Sidebar Item 2</a></li>
                         </ul>

                    </div>
               </div>
                    
               </div>
          </div>
     );
};

export default Main;