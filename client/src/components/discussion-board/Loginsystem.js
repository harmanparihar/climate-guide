import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Main from './Main';
import Signup from "./Signup"
import Header from '../Header';
import path_backend from './path';

class LoginSystem extends Component {
  constructor() {
    super()

    this.logout = this.logout.bind(this)

  }


  logout(event) {
    event.preventDefault()
    axios.post(`${path_backend}/user/logout`).then(response => {
      console.log(response.data)
      if (response.status === 200) {
        console.log("logout successful")
        this.props.updateUser({
          loggedIn: false,
          username: null,
          name:null
        })
      }
    }).catch(error => {
      console.log('Logout error')
    })
  }

  render() {
    const loggedIn = this.props.loggedIn;
    console.log('navbar render, props: ')
    console.log(this.props);

    return (

      <div className="get-involved">


      {loggedIn ? (
        <section className="navbar-section">
        <Main userObj={this.props.userObj} logout={this.logout}/>
        </section>
        ) : (
        <section className="get-involved">
        <Signup />
        </section>
        )}
        </div>




        );

    }
  }

  export default LoginSystem
