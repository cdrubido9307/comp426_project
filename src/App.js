import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch
  } from "react-router-dom";

import LandingPage from './views/LandingPage';
import Login from './views/Login';
import Signup from './views/Signup';


//import Menu from './Menu'
import './App.css';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" ><LandingPage /></Route>
                <Route path="/login"><Login /></Route>
                <Route path="/signup"><Signup /></Route>
            </Switch>
        </Router>
    );
}
