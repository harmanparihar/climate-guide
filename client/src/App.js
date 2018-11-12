import React, { Component } from 'react';
import Header from './components/Header';
import Sidebar from './components/discussion-board/Sidebar';
import Footer from './components/Footer';
import TempChart from './components/charts/tempChart/TempChart';
import CarbonChart from './components/charts/carbonChart/CarbonChart';
import Co2Chart from './components/charts/co2Chart/Co2Chart';

import { Route } from 'react-router-dom';
import LoginSystem from './components/discussion-board/Loginsystem';
import Signup from './components/discussion-board/Sign-up';
import Login from './components/discussion-board/login-form';
import axios from 'axios';

import './App.scss';

class App extends Component {
    constructor() {
        super()
        this.state = {
            loggedIn: false,
            username: null
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
        axios.get('http://localhost:8080/user/').then(response => {
            console.log('Get user response: ');
            console.log(response.data);
            if (response.data.user) {
                console.log('Get User: There is a user saved in the server session: ');

                this.setState({
                    loggedIn: true,
                    username: response.data.user.username
                });
            } else {
                console.log('Get user: no user');
                this.setState({
                    loggedIn: false,
                    username: null
                });
            }
        });
    }
    render() {
        return (
            <div className="App">
            <Header />

            <Sidebar />

            <LoginSystem updateUser={this.updateUser} loggedIn={this.state.loggedIn} />

            <Route
            path="/login"
            render={() => <Login updateUser={this.updateUser} />}
            />

            <Route
            path="/signup"
            render={() => <Signup />}
            />
            <br/><br/>

            <TempChart />
            <br/><br/>
            <CarbonChart />
            <br/><br/>
            <Co2Chart />
            <br/><br/>

            <Footer />
            </div>
        );
    }
}

export default App;
