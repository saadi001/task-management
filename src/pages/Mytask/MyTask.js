import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const MyTask = () => {
     const { user } = useContext(AuthContext)
     const { data: myTask, isLoading } = useQuery({
          queryKey: ['myTask', user?.email],
          queryFn: async () => {
               const res = await fetch(`http://localhost:5000/myTask?email=${user?.email}`)
               const data = await res.json()
               console.log(data)
               return data;
          }
     })

     if (isLoading) {
          return <div>Loading...</div>
     }

     return (
          <div>
               <p className='text-2xl font-semibold capitalize text-gray-700'>My task</p>
               {
                    myTask && myTask.map(task => <div className='mt-5 flex justify-between items-center border rounded'>
                         <div className='flex gap-4'>
                              <div className="avatar">
                                   <div className="w-24 rounded">
                                        <img src={task?.image} alt='taskPhoto'/>
                                   </div>
                              </div>
                              <div>
                                   <p className='capitalize text-xl font-semibold text-slate-700'>{task?.taskName}</p>
                                   <p className='text-sm'>{task?.taskDetails.length > 30 ? task?.taskDetails.slice(0,20) + "..." : task?.taskDetails}</p>
                              </div>
                         </div>
                         <div className='flex gap-2'>
                              <div>update</div>
                              <div>delete</div>
                         </div>
                    </div>)
               }
          </div>
     );
};

export default MyTask;