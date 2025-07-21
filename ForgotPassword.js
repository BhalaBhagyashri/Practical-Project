import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleReset = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div style={{background:"lightblue",padding:50,textAlign:"center", width:200,height:200,textShadow:20,margin:5}}>
      <h2>Forgot Password</h2>
      <form onSubmit={handleReset}>
        <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} required /><br/>
        <button type="submit">Send Reset Link</button><br/>
      </form>
      <p><Link to="/login">Back to Login</Link></p>
    </div>
  );
};

export default ForgotPassword;
