import React from 'react';

import Login from './components/Login';
import Signup from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import {  BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{ backgroundColor:"blueviolet",textAlign:"right",padding:200,margin:5 }}  >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
