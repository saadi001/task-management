import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Loading from '../../pages/Loading/Loading';

const PrivateRoute = ({ children }) => {
     const { user, loading } = useContext(AuthContext);
     const location = useLocation();

     if (loading) {
          return (
               <div className='main flex justify-center items-center py-10'>
                    <div className='max-w-4xl w-full h-full mx-3 flex justify-center items-center lg:mx-0 rounded-md inner-card overflow-y-auto'>
                         <Loading></Loading>
                    </div>
               </div>
          )
     }
     if (user) {
          return children;
     }
     return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;