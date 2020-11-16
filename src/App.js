import './App.css';
import Login from './views/Login';
import Signup from './views/Signup';
import LandingPage from './views/LandingPage';
import UserDashboard from './views/UserDashboard';
import ForgotPassword from "./views/ForgotPassword"
import { AuthProvider } from './contexts/AuthContext';

import {
  BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';

export default function App() {
  return (
    <AuthProvider>
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route path="/user-dashboard" component={UserDashboard}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </Router>
    </div>
    </AuthProvider>
  );
}

