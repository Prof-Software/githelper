import React, { useState } from 'react';

const Login = () => {
  // State to manage the input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    // Simulate authentication (replace with your actual authentication logic)
    // For demonstration, let's assume any non-empty username and password combination is valid
    if (username && password) {
      // Store the user in localStorage
      localStorage.setItem('user', JSON.stringify({ username }));
      // Redirect to home page or perform any other action
      window.location.href = '/';
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
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
