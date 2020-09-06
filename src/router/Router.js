import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from '../components/App';
import Details from '../components/Details';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/details/:timestamp" component={Details} />
            </Switch>
        </Router>
    )
}

export default AppRouter