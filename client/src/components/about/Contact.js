// Form.js use React local state management to render the notification of successfully sent message

import React, { Component } from "react";
import axios from 'axios';
import path from '../discussion-board/path';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            userEmail: "",
            userSubject: "",
            userMessage: "",
            userSubscribe: false,
            sending: false,
            sent: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.renderSuccess = this.renderSuccess.bind(this);
    }

    handleChange(e) {
        const stateName = e.target.name;
        const stateValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        this.setState({
            [stateName]: stateValue
        });
    }

    async handleSubmit(e) {
        e.preventDefault();
        this.setState({
            sending: true
        });

        await axios.post(path + '/api/form', this.state)
        .then(res => {
            if (res.data.message === 'success') {
                this.setState({
                    sending: false,
                    sent: true
                });
            } else {
                alert("Something's not right... Would you like to try again?");
            }

        })
        .catch(err => {
            console.log('ERROR on front-end ' + err);
        });
        // console.log(this.state);
    }

    renderForm() {
        return (
            <form className="contact-form container" onSubmit={this.handleSubmit}>
                <h2>Contact Us</h2>
                <label>
                    <span>Name: </span>
                    <input
                        type="text"
                        name="userName"
                        value={this.state.userName}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    <span>Email: </span>
                    <input
                        type="email"
                        name="userEmail"
                        value={this.state.userEmail}
                        onChange={this.handleChange}
                        required
                    />
                </label>
                <label>
                    <span>Subject: </span>
                    <input
                        type="text"
                        name="userSubject"
                        value={this.state.userSubject}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    <span style={{verticalAlign: 'top', marginTop: '.5rem'}}>Message: </span>
                    <textarea
                        name="userMessage"
                        value={this.state.userMessage}
                        onChange={this.handleChange}
                        required
                    />
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="userSubscribe"
                        checked={this.state.userSubscribe}
                        onChange={this.handleChange}
                    />
                    Did you join in the conversation in our discussion board?
                </label>
                <button type="submit">
                    {this.state.sending ? <span><span class="fas fa-spinner fa-spin"></span> Sending</span> : "Send message"}
                </button>
            </form>
        );
    }

    renderSuccess() {
        return (
            <div className="contact-success container">
                <h2>Contact Us</h2>
                <p>Thank you for contacting us. We'll get back to you within 5 days. Or you can <a href="mailto:maggievu91@gmail.com?subject=Hello%20from%20Climate%20Guide%20user">email us directly</a>. </p>
                <div className="contact-success-results">
                    <p><strong>Your message</strong></p>
                    <p>Name: {this.state.userName}</p>
                    <p>Email: {this.state.userEmail}</p>
                    <p>Subject: {this.state.userSubject}</p>
                    <p>Message: {this.state.userMessage}</p>
                    <p>
                        I {this.state.userSubscribe ? "am" : "am not"} a member of Climate Guide's discussion board.
                    </p>
                </div>
            </div>
        );
    }

    render() {
        return this.state.sent ? this.renderSuccess() : this.renderForm();
    }
}

export default Contact;
