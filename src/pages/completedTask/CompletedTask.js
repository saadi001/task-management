import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const CompletedTask = () => {
     const {user} = useContext(AuthContext)
     const {data:completedTask, isLoading, refetch} = useQuery({
          queryKey:['completedTask'],
          queryFn: async()=>{
               const res = await fetch(`http://localhost:5000/completedTask?email=${user?.email}`)
               const data = res.json()
               return data;
          }
     })

     const handleDelete = (id) =>{
          fetch(`http://localhost:5000/myTask/${id}`,{
               method: 'DELETE',

          })
          .then(res=> res.json())
          .then(data=>{
               console.log(data)
               if(data.deletedCount>0){
                    refetch()
                    toast.success('task deleted successfully')
               }
          })
     }

     if(isLoading){
          return <div>Loading...</div>
     }
     return (
          <div>
               <p className='text-2xl font-semibold capitalize text-gray-700'>Completed task</p>
               {
                    completedTask && completedTask.map(task => <div key={task._id} className='mt-5 flex justify-between items-center border rounded'>
                         <div className='flex gap-4'>
                              <div className="avatar">
                                   <div className="w-24 h-full rounded">
                                        <img src={task?.image} alt='taskPhoto' />
                                   </div>
                              </div>
                              <div>
                                   <p className='capitalize text-xl font-semibold text-slate-700'>{task?.taskName}</p>
                                   <p className='text-sm'>{task?.taskDetails.length > 30 ? task?.taskDetails.slice(0, 20) + "..." : task?.taskDetails}</p>
                              </div>
                         </div>
                         <div className='grid grid-cols-1 gap-3 pr-2'>
                              <button className="px-4 py-2 text-xs text-slate-200 transition-colors duration-300 transform bg-gradient-to-r from-[#cc2b5e] to-[#753a88] rounded-md  focus:outline-none focus:bg-gray-600">Not complete</button>
                              <button onClick={()=>handleDelete(task._id)} className="px-4 py-2 text-xs text-slate-200 transition-colors duration-300 transform bg-gradient-to-r from-[#cc2b5e] to-[#753a88] rounded-md  focus:outline-none focus:bg-gray-600">delete</button>                                                            


                         </div>
                    </div>)
               }
          </div>
     );
};

export default CompletedTask;