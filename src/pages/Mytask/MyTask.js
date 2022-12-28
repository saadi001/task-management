import React from 'react';

const MyTask = () => {
     return (
          <div>
               <p className='text-2xl font-semibold capitalize text-gray-700'>My task</p>
               <div className='mt-5 flex justify-between items-center border rounded'>
                    <div className='flex gap-3'>
                         <div className='w-24 border rounded'><img className='w-full' src="" alt="" /></div>
                         <div>
                         <p>name</p>
                         <p>details</p>
                         </div>
                    </div>
                    <div className='flex gap-2'>
                         <div>update</div>
                         <div>delete</div>
                    </div>
               </div>
          </div>
     );
};

export default MyTask;