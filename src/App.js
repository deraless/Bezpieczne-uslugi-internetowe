import React from 'react';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './pages/LoginPage'
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CalcPage from './pages/CalcPage';
import ExamplePage from './pages/ExamplePage';

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <PrivateRoute path="/home" component={HomePage} />
          <PrivateRoute path="/calc" component={CalcPage} />
          <PrivateRoute path="/example" component={ExamplePage} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
