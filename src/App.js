import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ShowUser from './components/ShowUser';
import CreateUser from './components/CreateUser';

function App() {
    return (
        <Router>
            <div className='App'>
                <div className='container'>
                    <Navbar />
                    <Switch>
                        <Route path='/create'>
                            <CreateUser />
                        </Route>
                        <Route path='/'>
                            <ShowUser />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
