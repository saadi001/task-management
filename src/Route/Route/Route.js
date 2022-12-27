import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddTask from "../../pages/AddTask/AddTask";
import CompletedTask from "../../pages/completedTask/CompletedTask";
import Home from "../../pages/Home/Home";
import MyTask from "../../pages/Mytask/MyTask";

export const router = createBrowserRouter([
     {
          path:'/',
          element: <Main></Main>,
          children:[
               {
                    path:'/',
                    element: <Home></Home>
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
     }
])