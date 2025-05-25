
import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import AddTask from './Pages/addTask';
import Dashboard from './Pages/dashboard';
import AllTasks from './Pages/alltasks';
import AboutUs from './Pages/AboutUs';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/addTask' element={<AddTask />} />
      <Route path='/Dashboard' element={<Dashboard />} />
      <Route path='/AllTasks' element={<AllTasks />} />
      <Route path='/AboutUs' element={<AboutUs />} />
      
    </Route>
  )
);

function App() {

  return <RouterProvider router={router} />;
}

export default App;
