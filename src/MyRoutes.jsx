import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Correct imports
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import Bag from './pages/Bag';
import Register from './pages/Register';
import Login from './pages/Login';

const MyRoutes = () => {
  return (
    <BrowserRouter> {/* Use BrowserRouter instead of Router */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} /> {/* Nested route */}
          <Route path='/bag' element = {<Bag />} />
          <Route path = '/register' element = {<Register />} />
          <Route path = '/login' element = {<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;