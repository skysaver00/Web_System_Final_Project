import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Links } from './components'
import { List, Insert, Update, home } from './pages'

class App extends React.Component {
    render = () => {
        return (
            <div className="App">
                <span className = "myName">201620931 소프트웨어학과 김영우</span>
                <div>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <Router>
                        <Links />
                        <Switch>
                            <Route path="/home"  component={home}/>
                            <Route path="/seats/list" exact component={List}/>
                            <Route path="/seats/create" exact component={Insert}/>
                            <Route path="/seats/update/:id" exact component={Update}/>
                        </Switch>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;
