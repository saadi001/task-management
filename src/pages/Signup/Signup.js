import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import signup from '../../Asset/image/sign up.svg'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Signup = () => {
     const { register, formState: { errors }, handleSubmit } = useForm();
     const [signupError, setSignupError] = useState();
     const { createUser, updateUserProfile } = useContext(AuthContext);
     const navigate = useNavigate();
     const location = useLocation();

     const from = location.state?.from?.pathname || '/'

     const handleSignup = (data) => {
          const { username, email, password } = data;
          createUser(email, password)
               .then(result => {
                    const user = result.user;
                    console.log(user);
                    setSignupError('')

                    const userInfo = {
                         displayName: username
                    }
                    updateUserProfile(userInfo)
                         .then(() => {
                              toast.success('sign in successful')
                              navigate(from, {replace: true})
                         })
                         .catch(error => {
                              console.error(error)
                         })
               })
               .catch(error => {
                    const errMessage = error.message.split('/')[1].slice(0, -1).slice(0, -1);
                    setSignupError(errMessage)
               })
     }
     return (
          <div className='main flex justify-center items-center py-10'>
               <div className='max-w-4xl w-full h-full mx-3 lg:mx-0 grid grid-cols-1 md:grid-cols-2  rounded-md inner-card overflow-y-auto'>
                    <div className="w-full h-full  p-6 lg:px-8 dark:bg-gray-800">
                         <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white capitalize">Sign up</h1>

                         <form onSubmit={handleSubmit(handleSignup)} className="mt-6">
                              <div>
                                   <label htmlFor="username" className="block text-sm text-gray-800 dark:text-gray-200">Username</label>
                                   <input {...register('username', { required: 'username is required' })} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 sidebar border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-rose-400 focus:ring-gray-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                   {errors.username && <p className='text-xs text-red-700 flex items-center mt-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3 mr-[2px]">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                   </svg>{errors.username?.message}</p>}
                              </div>

                              <div className="mt-4">
                                   <label htmlFor="username" className="block text-sm text-gray-800 dark:text-gray-200">Email</label>
                                   <input {...register('email', { required: 'Email adress is required' })} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 sidebar border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-rose-400 focus:ring-gray-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                   {errors.email && <p className='text-xs text-red-700 flex items-center mt-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3 mr-[2px]">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                   </svg>{errors.email?.message}</p>}
                              </div>

                              <div className="mt-4">
                                   <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                                   </div>

                                   <input {...register('password', { required: 'Password is required' })} type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 sidebar border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-rose-400 focus:ring-gray-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                   {errors.password && <p className='text-xs text-red-500 flex items-center mt-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3 mr-[2px]">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                   </svg>{errors.password?.message}</p>}
                                   {
                                        signupError && <div className='text-xs text-red-500 flex items-center mt-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-[2px]">
                                             <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                        </svg>{signupError}</div>
                                   }
                              </div>

                              <div className="mt-6">
                                   <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gradient-to-l from-[#cc2b5e] to-[#753a88] rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                                        Sign Up
                                   </button>
                              </div>
                         </form>


                         <p className="mt-8 text-xs font-light text-center text-gray-700"> Already have an account? <Link to={'/login'} className="font-medium text-gray-700 dark:text-gray-200 hover:underline">login</Link></p>
                    </div>
                    <div className='w-full hidden  md:flex justify-center items-center'>
                         <img className='w-4/5 ' src={signup} alt="" />
                    </div>
               </div>

          </div>
     );
};

export default Signup;