import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components//home/Home';
// import HomeMenu from './components/navigation/HomeMenu';
import Footer from './components/Footer';

import { Route } from 'react-router-dom';
import LoginSystem from './components/discussion-board/Loginsystem';
import Signup from './components/discussion-board/Signup';
import Login from './components/discussion-board/login-form';
import CausesEffects from './components/causes/CausesEffects';
import About from './components/about/About';
import path_backend from './components/discussion-board/path';
import axios from 'axios';

//import routing packages
// import {Router, browserHistory} from 'react-router';

import './App.scss';

class App extends Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false,
            username: null,
            name: null,
        };
        this.getUser = this.getUser.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.updateUser = this.updateUser.bind(this);

    }

    componentDidMount() {
        this.getUser();
    }

    updateUser(userObject) {
        this.setState(userObject);
    }

    getUser() {
        axios.get(`${path_backend}/user/`).then(response => {
            console.log('Get user response: ');
            console.log(response.data);
            if (response.data.user) {
                console.log('Get User: There is a user saved in the server session: ');

                this.setState({
                    loggedIn: true,
                    username: response.data.user.username,
                    name: response.data.user.name
                });
            } else {
                console.log('Get user: no user');
                this.setState({
                    loggedIn: false,
                    username: null,
                    name: null
                });
            }
        });
    }
    render() {



        return (
            <div className="App">
            <Route
            exact
            path="/"
            render={() => <Header />}
            />
            <Route
            exact
            path="/"
            render={() => <Home />}
            />
            <Route
            path="/login"
            render={() => <Login updateUser={this.updateUser} />}
            />
            <Route
            path="/tips"
            render={() => <Home />}
            />
            <Route
            path="/causes & effects"
            render={() => <CausesEffects />}
            />
            <Route
            path="/signup"
            render={() => <Signup />}
            />
            <Route
            path="/about"
            render={() => <About />}
            />

            <Route
            path="/get involved"
            render={() => <LoginSystem userObj={this.state} updateUser={this.updateUser} loggedIn={this.state.loggedIn} />}
            />
            <Route
            path="/"
            render={() => <Footer />}
            />

            </div>
            );
        }
    }

    export default App;
