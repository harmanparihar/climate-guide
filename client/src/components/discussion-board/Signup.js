import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from '../Header';


class Signup extends Component {
	constructor() {
		super()
		this.state = {
			name: '',
			username: '',
			password: '',
			confirmPassword: '',

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('http://localhost:8080/user/', {
			name:			this.state.name,
			username: this.state.username,
			password: this.state.password
		})
		.then(response => {
			console.log(response)
			if (!response.data.errmsg) {
				console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: 'http://localhost:8080/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
			this.setState({
				name: '',
				username: '',
				password: '',
			});
			alert("Your account has been created");
		}


		render() {
			return (

				<div className="fixed-header">
				<Header/>
				<div className="form-page">
				<div className="form-div">
				<h3>Create a new account today! </h3>
				<h4>Join Our Community</h4>
				<form className="login-form ">
				<div className="form-group">
				<div className="col-1 col-ml-auto">
				<label>
				<span>Full Name: </span>
				<input className="form-input"
				type="text"
				id="name"
				name="name"
				placeholder="Full Name"
				value={this.state.name}
				onChange={this.handleChange}
				/>
				</label>
				<label>
				<span>Email Id: </span>
				<input className="form-input"
				type="email"
				id="username"
				name="username"
				placeholder="Username"
				value={this.state.username}
				onChange={this.handleChange}
				/>
				</label>
				<label>
				<span>Password: </span>
				<input className="form-input"
				placeholder="Password"
				type="password"
				name="password"
				value={this.state.password}
				onChange={this.handleChange}
				/>
				</label>
				</div>
				</div>
				<button
				className="btn"
				onClick={this.handleSubmit}
				type="submit"
				>Sign up</button>
				<div className="meta-text">Already have an account?</div>
				<Link to="/login">
				<span className="text-secondary">Login</span>
				</Link>
				<Link to="/" className="btn btn-link text-secondary">
				<span className="text-tertiary">Back to Home</span>
				</Link>
				</form>
				</div>
				</div>
				</div>
				)
		}
	}

	export default Signup
