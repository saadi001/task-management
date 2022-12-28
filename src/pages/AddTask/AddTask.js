import React from 'react';
import addTask from '../../Asset/icon/addTask.svg'

const AddTask = () => {
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
                              <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Add a task</h2>
                              <div className='border-t w-10 md:w-80 border-zinc-500'></div>
                         </div>

                         <form>
                              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                   <div>
                                        <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Taskname</label>
                                        <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 sidebar border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-rose-400 focus:ring-gray-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                   </div>

                                   <div>
                                        <label className="text-gray-700 dark:text-gray-200 " htmlFor="username">Photo</label>
                                        <div className='border relative overflow-hidden text-ellipsis mt-2 rounded-md flex justify-between items-center'>
                                             <span className='pl-3'>Choose file...</span>
                                             <span className='float-right sidebar inline-block py-2 px-3'>Browse</span>
                                             <input id="username" type="file" className=" opacity-0 absolute top-0 left-0 w-full px-4 py-2 text-gray-700 sidebar border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-rose-400 focus:ring-gray-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        </div>
                                   </div>

                                   <div>
                                        <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Task Details</label>
                                        <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 sidebar border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-rose-400 focus:ring-gray-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                   </div>

                              </div>

                              <div className="flex justify-end mt-6">
                                   <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                              </div>
                         </form>
                    </section>
               </div>
          </div>
     );
};

export default AddTask;