import React, { Component } from 'react';
import Team from './Team';
import Contact from './Contact';
import Resources from './Resources';

class About extends Component {
    render() {
        return (
            <div>

                <Team />

                <Contact />
                <Resources />

            </div>
        );
    }
}

export default About;
