import './App.css';
import Login from './views/Login';
import Signup from './views/Signup';
import LandingPage from './views/LandingPage';
import About from './views/About';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

export default function App() {
    return (
        <div className='App'>
            <Router>
                <Switch>
                    <Route exact path='/' component={LandingPage} />
                    <Route path='/login' component={Login} />
                    <Route path='/signup' component={Signup} />
                    <Route path='/about' component={About} />
                </Switch>
            </Router>
        </div>
    );
}

