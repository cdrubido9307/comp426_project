import './App.css';
import Login from './views/Login';
import Signup from './views/Signup';
import LandingPage from './views/LandingPage';
import Testing from './views/Testing';

import {
  BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/" ><LandingPage /></Route>
            <Route path="/login"><Login /></Route>
            <Route path="/signup"><Signup /></Route>
        </Switch>
      </Router>
    </div>

    // <div className="App">
    //   <Testing/>
    // </div>
  );
}

