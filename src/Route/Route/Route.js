import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddTask from "../../pages/AddTask/AddTask";
import CompletedTask from "../../pages/completedTask/CompletedTask";
import Login from "../../pages/Login/Login";
import MyTask from "../../pages/Mytask/MyTask";
import NotFound from "../../pages/NotFound/NotFound";
import Signup from "../../pages/Signup/Signup";

export const router = createBrowserRouter([
     {
          path:'/',
          element: <Main></Main>,
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
     }

])