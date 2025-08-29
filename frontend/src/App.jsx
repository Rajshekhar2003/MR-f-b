import React from 'react'
import Home from './home/Home'
import Course from './components/Course'
import {Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
const App = () => {
  return (<>
    <div className='dark:bg-slate-900 dark:text-white'>
      <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      <Footer />
    </div>
  </>
  );
};

export default App