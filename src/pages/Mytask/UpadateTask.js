import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const UpadateTask = () => {
     const data = useLoaderData();
     // console.log(data)
     const { taskName, taskDetails, image, _id } = data;
     const [imageUrl, setImageUrl] = useState(image);
     const [loading, setLoading] = useState(false)
     const navigate = useNavigate();

     const { register, formState: { errors }, handleSubmit } = useForm();

     const handleUpdate = (data) => {
          setLoading(true)
          const { taskname, taskdetails } = data;
          console.log(data.image.length)
          if (data.image.length < 1) {
               const updatedDetails = {
                    taskName: taskname,
                    taskDetails: taskdetails,
                    image: imageUrl
               }
               fetch(`https://task-management-backend.vercel.app/updateDetails/${_id}`, {
                    method: 'PUT',
                    headers: {
                         'content-type': 'application/json'
                    },
                    body: JSON.stringify(updatedDetails)
               })
                    .then(res => res.json())
                    .then(data => {
                         console.log(data)
                         setLoading(false)
                         data.modifiedCount > 0 ? toast.success('Task updated successfully') : toast("You haven't change anything")
                         navigate('/myTask')
                    })

          }
          else if (data.image.length > 0) {
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
                              console.log(imageUrl)
                              console.log(imageData.data.url)
                              // setImageUrl(imageData.data.url)
                              console.log(imageUrl)
                              const updatedDetails = {
                                   taskName: taskname,
                                   taskDetails: taskdetails,
                                   image: imageData.data.url
                              }
                              fetch(`https://task-management-backend.vercel.app/updateDetails/${_id}`, {
                                   method: 'PUT',
                                   headers: {
                                        'content-type': 'application/json'
                                   },
                                   body: JSON.stringify(updatedDetails)
                              })
                                   .then(res => res.json())
                                   .then(data => {
                                        console.log(data)
                                        setLoading(false)
                                        data.modifiedCount > 0 ? toast.success('Task updated successfully') : toast("You haven't change anything")
                                        navigate('/myTask')
                                   })
                         }
                    })
          }
     }
     return (
          <div>
               {
                    loading ? <div className='mt-14 flex justify-center'><Loading></Loading></div>:
                    <div>
                    <h4 className='capitalize text-2xl dark:text-slate-200 font-semibold'>update your details</h4>
                    <form onSubmit={handleSubmit(handleUpdate)}>
                         <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                              <div>
                                   <label className="text-gray-700" htmlFor="username">Taskname</label>
                                   <input {...register('taskname', { required: 'taskname is required' })} defaultValue={taskName} id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 sidebar border border-gray-200 rounded-md focus:border-rose-400 focus:ring-gray-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                                   {errors.taskname && <p className='text-xs text-red-700 flex items-center mt-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3 mr-[2px]">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                   </svg>{errors.taskname?.message}</p>}
                              </div>

                              <div>
                                   <label className="text-gray-700 ">Photo</label>
                                   <div className='border relative  mt-2 rounded-md flex justify-between items-center'>
                                        <span className='pl-3 text-gray-700 overflow-hidden text-ellipsis'>choose file...</span>
                                        <span className='sidebar inline-block py-2 px-3 text-gray-700 cursor-pointer'>Browse</span>
                                        <input {...register('image')} type="file" className="opacity-0 absolute top-0 left-0 w-full px-4 py-2 text-gray-700 sidebar border border-gray-200 rounded-md  focus:border-rose-400 focus:ring-gray-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                   </div>
                              </div>

                              <div className='md:col-span-2'>
                                   <label className=" text-gray-700">Task Details</label>
                                   <textarea {...register('taskdetails', { required: 'taskdetails is required' })} defaultValue={taskDetails} id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 sidebar border border-gray-200 rounded-md  focus:border-rose-400 focus:ring-gray-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                   {errors.taskdetails && <p className='text-xs text-red-700 flex items-center mt-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3 mr-[2px]">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                   </svg>{errors.taskdetails?.message}</p>}
                              </div>

                         </div>

                         <div className="flex justify-end mt-6">
                              <button type='submit' className="px-8 py-2.5 leading-5 text-slate-300 transition-colors duration-300 transform bg-gradient-to-r from-[#cc2b5e] to-[#753a88] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Upadate</button>
                         </div>
                    </form>
               </div>
               }
          </div>
     );
};

export default UpadateTask;