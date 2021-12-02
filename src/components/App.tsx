import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Switch } from 'react-router-dom'
import { LoginForm } from './LoginForm';
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { ChatsListComponent } from './ChatsListComponent';
import { Spinner } from '../components/utils/Spinner';


function App() {
    const [showSpinner, setShowSpinner] = useState<boolean>(true);
    return (
        <>
            <HashRouter>
                <Navbar />
                <div className="d-flex justify-content-center">
                    <Spinner show={showSpinner} />
                </div>
                <Switch>
                    <Route path="/login">
                        <LoginForm
                            toggleSpinner={(boolean) => setShowSpinner(boolean)}
                            showingSpinner={showSpinner}
                        />
                    </Route>
                    <Route path="/chats">
                        <ChatsListComponent
                            toggleSpinner={(boolean) => setShowSpinner(boolean)}
                            showingSpinner={showSpinner}
                        />
                    </Route>
                    <Route path="/search">
                        <div>
                            <Home isSearchPage
                                toggleSpinner={(boolean) => setShowSpinner(boolean)}
                                showingSpinner={showSpinner}
                            />
                        </div>
                    </Route>
                    <Route path="/">
                        <Home
                            toggleSpinner={(boolean) => setShowSpinner(boolean)}
                            showingSpinner={showSpinner}
                        />
                    </Route>

                </Switch>
            </HashRouter>
        </>
    );
}

export default App;
