import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import Bag from './pages/Bag';
import Register from './pages/Register';
import Login from './pages/Login';

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path='/bag' element = {<Bag />} />
        <Route path='/register' element ={<Register />} />
        <Route path='/login' element ={<Login/>} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;