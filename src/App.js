import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Insights from './components/Insights'; // Import the Insights component

const App = () => {
  // Check if user exists in localStorage
  const userExists = !!localStorage.getItem('user');
  
  // Get the username from localStorage
  const username = localStorage.getItem('user');
  console.log(username)
  return (
    <Router>
      <Routes>
        {/* Route to Home component if user exists, otherwise redirect to login */}
        <Route exact path="/" element={userExists ? <Home /> : <Navigate to="/login" />} />
        <Route exact path="/login" element={<Login />} />
        {/* Route to Insights component with dynamic username */}
        <Route exact path={`/username/insights/:reponame`} element={<Insights />} />
      </Routes>
    </Router>
  );
}

export default App;
