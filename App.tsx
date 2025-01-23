import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Referral from './pages/referral';

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                // ...existing code...
                <Route path="/referral" component={Referral} />
                // ...existing code...
            </Switch>
        </Router>
    );
};

export default App;
