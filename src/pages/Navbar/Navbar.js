import React from 'react';
import logo from '../../Asset/icon/logo.png';

const Navbar = () => {
     return (
          <div className='w-full bg-slate-300'>
               <div className='max-w-screen-lg mx-auto flex justify-between items-center py-3'>
                    <div>
                         <img className='w-8' src={logo} alt="" />
                    </div>
                    <div className='flex items-center gap-2'>
                         <div>search bar</div>
                         <div>night mode</div>
                         <div>profile</div>
                    </div>

               </div>
          </div>
     );
};

export default Navbar;