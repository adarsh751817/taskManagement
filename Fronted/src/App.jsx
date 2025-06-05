
import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import AddTask from './Pages/addTask';
import Dashboard from './Pages/dashboard';
import AllTasks from './Pages/alltasks';
import AboutUs from './Pages/AboutUs';
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import ProtectedRoute from './Components/PrivateRoutes';
import Logout from './Pages/Logout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      {/* ✅ Public Routes */}
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path="/logout" element={<Logout />} />


      {/* 🔐 Protected Routes */}
      <Route path='/addtask' element={<ProtectedRoute><AddTask /></ProtectedRoute>} />
      <Route path='/alltasks' element={<ProtectedRoute><AllTasks /></ProtectedRoute>} />
      <Route path='/aboutus' element={<ProtectedRoute><AboutUs /></ProtectedRoute>} />
    </Route>
  )
);


function App() {

  return <RouterProvider router={router} />;
}

export default App;




