import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Timer from './components/Timer';
import CountDown from './components/CountDown';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Timer}/>
        <Route path="countdown" component={CountDown} />
    </Route>
);

export default routes;