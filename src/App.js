import React from 'react';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './pages/LoginPage'
import PrivateRoute from './components/PrivateRoute';
import HomePage from './pages/HomePage';

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>
  return (
    <Router>
      <Route path="/" component={LoginPage} />
      <PrivateRoute path="/home" component={HomePage} />
    </Router>
  );
}

export default App;
