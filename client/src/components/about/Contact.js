// Form.js use React local state management to render the notification of successfully sent message

import React, { Component } from "react";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            userEmail: "",
            userSubject: "",
            userMessage: "",
            userSubscribe: false,
            sentSuccess: false
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

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            sentSuccess: true
        });
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
                <input type="submit" value="Send message" />
            </form>
        );
    }

    renderSuccess() {
        return (
            <div className="contact-success container">
                <h2>Contact Us</h2>
                <p>Thank you for contacting us. We'll get back to you within 5 days.</p>
                <div className="contact-success-results">
                    <p><strong>Your message</strong></p>
                    <p>Name: {this.state.userName}</p>
                    <p>Email: {this.state.userEmail}</p>
                    <p>Subject: {this.state.userSubject}</p>
                    <p>Message: {this.state.userMessage}</p>
                    <p>
                        I <em>{this.state.userSubscribe ? "did" : "didn't"}</em> join in the conversation.
                    </p>
                </div>
            </div>
        );
    }

    render() {
        return this.state.sentSuccess ? this.renderSuccess() : this.renderForm();
    }
}

export default Contact;
