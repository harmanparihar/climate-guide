import React, { Component } from 'react';
import resources from './resources.json';

class Resources extends Component {
    render() {
        const links = resources.map((resource, i) => {
            return (
                <li key={i}>
                    <a href={resource.url}>
                        <img src={require("../assets/logos/" + resource.logo)} alt={resource.name} />
                        {resource.name}
                    </a>
                </li>
            );
        });

        return (
            <div className="resources container">
                <h2>Resources</h2>
                <ol>{links}</ol>
            </div>
        );
    }
}

export default Resources;
