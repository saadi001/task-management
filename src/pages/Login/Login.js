import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../Asset/image/login.svg';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Login = () => {
     const { signIn, providerLogin,  } = useContext(AuthContext);
     const { register, formState: { errors }, handleSubmit } = useForm();
     const [logInError, setLogInError] = useState('')
     const provider = new GoogleAuthProvider()
     const location = useLocation();
     const navigate = useNavigate();
     
     const from = location.state?.from?.pathname || '/';

     const handleLogin = (data) => {
          const { email, password } = data;
          signIn(email, password)
               .then(result => {
                    const user = result.user;
                    console.log(user);
                    setLogInError('')
                    toast.success('login successfully')
                    navigate(from, {replace: true})
               })
               .catch(error => {
                    console.error(error)
                    const errMessage = error.message.split('/')[1].slice(0, -1).slice(0, -1);
                    setLogInError(errMessage);
               })
     }

     const googlePopupLogin = (provider) => {
          providerLogin(provider)
               .then(result => {
                    const user = result.user;
                    console.log(user)
                    navigate(from, {replace: true})
               })
               .catch(error => {
                    console.error(error)
               })
     }
     return (
          <div className='main flex justify-center items-center py-10'>
               <div className='max-w-4xl w-full h-full mx-3 lg:mx-0 grid grid-cols-1 md:grid-cols-2  rounded-md inner-card overflow-y-auto'>
                    <div className='w-full hidden  md:flex justify-center items-center'>
                         <img className='w-3/4 ' src={login} alt="" />
                    </div>
                    <div className="w-full h-full  p-6 lg:px-8 dark:bg-gray-800">
                         <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">Login</h1>

                         <form onSubmit={handleSubmit(handleLogin)} className="mt-6">
                              <div>
                                   <label htmlFor="email" className="block text-sm text-gray-800 dark:text-gray-200">Email</label>
                                   <input {...register('email', { required: 'Email adress is required' })} type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 sidebar border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-rose-400 focus:ring-gray-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
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
                                   {logInError && <p className='text-xs text-red-500 flex items-center mt-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3 mr-[2px]">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                   </svg>{logInError}</p>}
                              </div>

                              <div className="mt-6">
                                   <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gradient-to-l from-[#cc2b5e] to-[#753a88] rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                                        Sign In
                                   </button>
                              </div>
                         </form>

                         <div className="flex items-center justify-between mt-4">
                              <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                              <span className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
                                   or login with Social Media
                              </span>

                              <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
                         </div>

                         <div onClick={() => googlePopupLogin(provider)} className="flex items-center mt-6 -mx-2">
                              <button type="button" className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                                   <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                                        <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                                        </path>
                                   </svg>

                                   <span className="mx-2 sm:inline">Sign in with Google</span>
                              </button>

                         </div>

                         <p className="mt-8 text-xs font-light text-center text-gray-400"> Don't have an account? <Link to={'/signup'} className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Create One</Link></p>
                    </div>
               </div>

          </div>
     );
};

export default Login;