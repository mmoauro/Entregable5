import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {LoginForm} from './LoginForm';
import {Home} from "./Home";


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <LoginForm/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>

            </Switch>
        </Router>
    );
}

export default App;
