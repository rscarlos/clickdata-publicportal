import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import ProtectedRoute from "./components/ProtectedRoute";

import {HomeView} from './view/HomeView';
import {ResultView} from './view/ResultView';

export default function Routes() {  
    return (
        <Fragment>
            <Route exac path="/" component={HomeView} />
            <ProtectedRoute exact path="/result" component={ResultView} /> 
        </Fragment>
    )
}
