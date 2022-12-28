import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Route/Route/Route';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
