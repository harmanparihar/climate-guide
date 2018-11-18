import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Main from './Main';
import Signup from "./Signup"


class LoginSystem extends Component {
  constructor() {
    super()

    this.logout = this.logout.bind(this)

  }


  logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('http://localhost:8080/user/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          username: null
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
      <div>
      <div>
      <div className="col-4" >
      {loggedIn ? (
        <section className="navbar-section">
        <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
        <span className="text-secondary">logout</span></Link>
        <Main />
        </section>
        ) : (
        <section className="get-involved">
        <Signup />
        </section>
        )}
        </div>

        </div>

        </div>

        );

    }
  }

  export default LoginSystem
