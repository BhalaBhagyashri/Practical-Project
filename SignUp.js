import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [ , setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Account created for ${email}`);
  };

  return (
    <div style={{background:"lightblue",textAlign:"center",padding:50, width:200,height:200,textShadow:20,margin:5}}  >
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required /><br/>
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required /><br/>
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Signup;
