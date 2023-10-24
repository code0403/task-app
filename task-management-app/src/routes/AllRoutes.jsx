import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Tasks from '../pages/Tasks';


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/task' element={<Tasks />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default AllRoutes
