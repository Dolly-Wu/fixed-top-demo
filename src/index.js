import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter} from 'react-router-dom'
import RouterConfig from './pages/index/index';


ReactDOM.render(
    <HashRouter>
        <Route component={RouterConfig} />
    </HashRouter>,
    document.getElementById('root')
);