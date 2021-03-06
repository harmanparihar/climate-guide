import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Header from '../Header';
import path_backend from './path';

class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      username: '',
      password: '',
      redirectTo: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }


   updateUser (userObject) {
    this.props.updateUser(userObject);
    this.setState({
      name: userObject.name,
      username: userObject.username,
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    console.log('handleSubmit')

    axios.post(`${path_backend}/user/login`, {
      username: this.state.username,
      password: this.state.password
    })
    .then(response => {
      console.log('login response: ')
      console.log(response)
      if (response.status === 200) {
        // update loginsystem.js state
        this.props.updateUser({
          loggedIn: true,
          username: response.data.username,
          name: response.data.name,
        })
        // update the state to redirect to home
        this.setState({
          redirectTo: '/get%20involved'
        })
      }
    }).catch(error => {
      console.log('login error: ')
      console.log(error);

    })
  }
  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
      <div className="get-involved">
        <div className="fixed-header">
        <Header/>
          <div className="form-page">
            <div className="form-div">
              <h3>Share your thoughts with others!</h3>
              <h4>Be an active member of our community</h4>
              <form className="login-form ">
                  <label>
                      <span>Username: </span>
                      <input className="form-input" type="text" id="username" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}
                      />
                  </label>
                  <label>
                      <span>Password: </span>
                      <input className="form-input" placeholder="password" type="password" name="password" value={this.state.password} onChange={this.handleChange}
                      />
                  </label>
                  <button className="submit" onClick={this.handleSubmit} type="submit">Login</button>
                  <div className="meta-text">Don't have an account?</div>
                  <Link to="/get involved" className="btn btn-link">
                  <span className="text-secondary">Sign up</span>
                  </Link>
                  <Link to="/" className="btn btn-link text-secondary">
                  <span className="text-tertiary">Back to Home</span>
                  </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
      )
    }
  }
}

export default LoginForm
