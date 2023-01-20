import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const TaskDetails = () => {
     const data = useLoaderData();
     const { image, taskName, taskDetails } = data;
     const navigate = useNavigate()
     return (
          <div>
               <div className='back mt-3 p-3 rounded-md'>
                    <div>
                         <img className='w-44' src={image} alt="" />
                         <h5 className='text-2xl font-semibold my-3'>{taskName}</h5>
                         <p className='text-sm'>{taskDetails}</p>
                    </div>
               </div>
               <div className='mt-2 cursor-pointer' onClick={()=> navigate(-1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
                    </svg>
               </div>
          </div>
     );
};

export default TaskDetails;