import './App.css';

import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import NavBar from './components/NavBar/NavBar';
import React from 'react';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <Router>
      <Route render={({ location }) => (
        <div className="App">
          <header>
            <NavBar />
          </header>
          <Switch location={location}>
            <Route path="/settings" component={SettingsPage} ></Route>
            <Route path="/home" component={HomePage} ></Route>
            <Route path="" render={() => <Redirect to="/home"></Redirect>} ></Route>
          </Switch>
        </div>
      )} />
    </Router>
  );
}

export default App;
