import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import addTask from '../../Asset/icon/addTask.svg'

const AddTask = () => {
     const { register, formState: { errors }, handleSubmit } = useForm();
     const navigate = useNavigate();

     const handleAddTask = (data) => {
          console.log(data)
          const { taskname, taskdetails } = data;
          const image = data.image[0]
          const formData = new FormData();
          formData.append('image', image)
          const url = `https://api.imgbb.com/1/upload?key=63767107697823bd4d26d5b8bb78e4a0`
          fetch(url, {
               method: 'POST',
               body: formData
          })
               .then(res => res.json())
               .then(imageData => {
                    if (imageData.success) {
                         console.log(imageData.data.url)
                         const tasks = {
                              taskName: taskname,
                              taskDetails: taskdetails,
                              image: imageData.data.url,
                              status: 'running'
                         }
                         fetch('http://localhost:5000/tasks',{
                              method: 'POST',
                              headers:{
                                   'content-type':'application/json'
                              },
                              body: JSON.stringify(tasks)
                         })
                         .then(res=>res.json())
                         .then(result =>{
                              toast.success('task added successfully')
                              navigate('/mytask')
                         })
                    }
               })
     }
     return (
          <div>
               <div className=' h-36 rounded-md flex justify-between items-center bg-gradient-to-tr from-[#EECDA3] to-[#EF629F]'>
                    <div className=' pl-5 pr-2'>
                         <span className='text-base md:text-3xl font-semibold'>Saadi's Tasks</span> <br />
                         <span className='text-slate-600 text-sm lg:text-base'>Maintain your daily tasks easily</span>
                    </div>
                    <div className='h-full'><img className='h-full p-2' src={addTask} alt="" /></div>
               </div>
               <div>
                    <section className="max-w-4xl p-6 mt-4 mx-auto  rounded-md dark:bg-gray-800">
                         <div className='flex gap-2 items-center'>
                              <h2 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Add a task</h2>
                              <div className='border-t w-10 md:w-80 border-zinc-500'></div>
                         </div>

                         <form onSubmit={handleSubmit(handleAddTask)}>
                              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                   <div>
                                        <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Taskname</label>
                                        <input {...register('taskname', { required: 'taskname is required' })} id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 sidebar border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-rose-400 focus:ring-gray-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        {errors.taskname && <p className='text-xs text-red-700 flex items-center mt-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3 mr-[2px]">
                                             <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                        </svg>{errors.taskname?.message}</p>}
                                   </div>

                                   <div>
                                        <label className="text-gray-700 dark:text-gray-200 " htmlFor="username">Photo</label>
                                        <div className='border relative overflow-hidden text-ellipsis mt-2 rounded-md flex justify-between items-center'>
                                             <span className='pl-3 text-gray-700'>Choose file...</span>
                                             <span className='sidebar inline-block py-2 px-3 text-gray-700 cursor-pointer'>Browse</span>
                                             <input {...register('image')} id="username" type="file" className="opacity-0 absolute top-0 left-0 w-full px-4 py-2 text-gray-700 sidebar border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-rose-400 focus:ring-gray-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        </div>
                                   </div>

                                   <div className='md:col-span-2'>
                                        <label className=" text-gray-700 dark:text-gray-200" htmlFor="username">Task Details</label>
                                        <textarea {...register('taskdetails', { required: 'taskdetails is required' })} id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 sidebar border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-rose-400 focus:ring-gray-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        {errors.taskdetails && <p className='text-xs text-red-700 flex items-center mt-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3 mr-[2px]">
                                             <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                        </svg>{errors.taskdetails?.message}</p>}
                                   </div>

                              </div>

                              <div className="flex justify-end mt-6">
                                   <button className="px-8 py-2.5 leading-5 text-slate-300 transition-colors duration-300 transform bg-gradient-to-r from-[#cc2b5e] to-[#753a88] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add</button>
                              </div>
                         </form>
                    </section>
               </div>
          </div>
     );
};

export default AddTask;