import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [ setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in with ${email}`);
    
  };

  return (
    
    <div style={{background:"lightblue",padding:50,textAlign:"center", width:200,height:200,textShadow:20,margin:5}}>
      <h2>Admin Login </h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required /><br/>
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required /><br/>
        <button type="submit"><b>Login</b></button>
      </form>
      <p>
        Don't have an account? <Link to="/Signup">Sign up</Link><br />
        <Link to="/forgot-password">Forgot password?</Link>
      </p>
    </div>
    
  );
};

export default Login;
