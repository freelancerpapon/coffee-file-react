import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import Signup from './components/Signup.jsx';
import SignIn from './components/SignIn.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Users from './components/Users.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: ()=> fetch('https://module-56-coffe-store-server-n5bssfvqh-papon-da-projects.vercel.app/user')
  },
  {
    path:'/addCoffee',
    element:<AddCoffee></AddCoffee>
  },
  {
    path:'/updateCoffee/:id',
    element:<UpdateCoffee></UpdateCoffee>,
    loader: ({params})=>fetch(`https://module-56-coffe-store-server-n5bssfvqh-papon-da-projects.vercel.app/user/coffee/${params.id}`)
  },
  {
    path:'/signup',
    element:<Signup></Signup>
  },
  {
    path:'/signin',
    element:<SignIn></SignIn>
  },
  {
    path:'/users',
    element:<Users></Users>,
    loader: ()=> fetch('https://module-56-coffe-store-server-n5bssfvqh-papon-da-projects.vercel.app/user')
    
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <AuthProvider>
       <RouterProvider router={router} />
       </AuthProvider>
  </React.StrictMode>,
)
