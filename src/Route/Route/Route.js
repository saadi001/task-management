import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddTask from "../../pages/AddTask/AddTask";
import CompletedTask from "../../pages/completedTask/CompletedTask";
import Loading from "../../pages/Loading/Loading";
import Login from "../../pages/Login/Login";
import MyTask from "../../pages/Mytask/MyTask";
import TaskDetails from "../../pages/Mytask/TaskDetails";
import NotFound from "../../pages/NotFound/NotFound";
import Signup from "../../pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
     {
          path:'/',
          element: <PrivateRoute><Main></Main></PrivateRoute>,
          children:[
               {
                    path:'/',
                    element: <AddTask></AddTask>
               },
               {
                    path: '/addTask',
                    element: <AddTask></AddTask>
               },
               {
                    path: '/myTask',
                    element: <MyTask></MyTask>
               },
               {
                    path: '/completedTask',
                    element: <CompletedTask></CompletedTask>
               },
               {
                    path: '/details/:id',
                    element: <TaskDetails></TaskDetails>,
                    loader: ({params}) => fetch(`https://task-management-backend.vercel.app/myTask/${params.id}`)
               }
          ]
     },
     {
          path: '/login',
          element: <Login></Login>
     },
     {
          path: '/signup',
          element: <Signup></Signup>
     },
     {
          path: '*',
          element: <NotFound></NotFound>
     },

])