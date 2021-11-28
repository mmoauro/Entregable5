import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter, Route, Switch} from 'react-router-dom'
import {LoginForm} from './LoginForm';
import {Home} from "./Home";


function App() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/login">
                    <LoginForm/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>

            </Switch>
        </HashRouter>
    );
}

export default App;
