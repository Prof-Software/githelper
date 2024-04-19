// Login.js
import React, { useState } from 'react';
import { useHistory, useNavigate } from 'react-router-dom';
import usersData from './users.json'; // Import user data

const Login = () => {
  // State to manage the input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // History hook to redirect after successful login
  const history = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Find user with matching email and password
    const user = usersData.users.find(u => u.email === email && u.password === password);

    if (user) {
      // Store the user in localStorage
      localStorage.setItem('user', JSON.stringify(user));
      // Redirect to home page
       history('/');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
