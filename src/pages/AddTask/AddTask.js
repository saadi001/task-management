import React from 'react';
import addTask from '../../Asset/icon/addTask.svg'

const AddTask = () => {
     return (
          <div>
               <div className=' h-36 rounded-md flex justify-between items-center bg-gradient-to-tr from-[#EECDA3] to-[#EF629F]'>
                    <div className=' pl-5 pr-2'>
                         <span className='text-3xl'>Saadi's Tasks</span> <br />
                         <span className='text-slate-600'>Maintain your daily tasks easily</span>
                    </div>
                    <div className='h-full'><img className='h-full p-2' src={addTask} alt="" /></div>
               </div>
          </div>
     );
};

export default AddTask;