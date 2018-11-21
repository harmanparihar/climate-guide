import React, { Component } from 'react';
import Team from './Team';
import Contact from './Contact';
import Resources from './Resources';
import Header from '../Header';

class About extends Component {
	render() {
		return (
			<div className="fixed-header">
			<Header/>
			<div className="wrapper container">

			<Team />

			<Contact />
			<Resources />

			</div>
			</div>
			);
	}
}

export default About;
