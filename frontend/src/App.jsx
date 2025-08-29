import React from 'react'
import Home from './home/Home'
import Course from './components/Course'
import {Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
import{ Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';

const App = () => {
  const[authUser,setAuthUser]=useAuth();
  return (<>
    <div className='dark:bg-slate-900 dark:text-white'>
      <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser?<Course />:<Navigate to={"/signup"}/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      <Footer />
      <Toaster/>
    </div>
  </>
  );
};

export default App