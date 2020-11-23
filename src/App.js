import './App.css';
import Login from './views/Login';
import Signup from './views/Signup';
import LandingPage from './views/LandingPage';
import UserDashboard from './views/UserDashboard';
import ForgotPassword from './views/ForgotPassword';
import CreateShipment from './components/CreateShipment/CreateShipment';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Pricing from './views/Pricing';
import Contact from './views/Contact';
import About from './views/About';
import TrackShipment from './views/TrackShipment';
import AdminDashboard from './views/AdminDashboard';
import SearchShipment from './views/SearchShipment';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

export default function App() {
    return (
        <AuthProvider>
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <PrivateRoute path="/user-dashboard" component={UserDashboard} />
                        <PrivateRoute path="/track-shipment" component={TrackShipment} />
                        <PrivateRoute path="/search-shipment" component={SearchShipment} />
                        <Route exact path="/admin-dashboard" component={AdminDashboard} />
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/forgot-password" component={ForgotPassword} />
                        <Route path="/create-shipment" component={CreateShipment} />
                        <Route path="/pricing" component={Pricing} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/about" component={About} />
                    </Switch>
                </Router>
            </div>
        </AuthProvider>
    );
}

