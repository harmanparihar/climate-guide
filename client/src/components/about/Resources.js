import React, { Component } from 'react';
import resources from './resources.json';

class Resources extends Component {
    render() {
        const links = resources.map((resource, i) => {
            return (
              <li key={i}>
                  <a href={resource.url}>
                      {resource.name}
                  </a>
              </li>
            );
        });

        return (
            <div className="resources">
                <h2>Resources</h2>
                <ul>
                    {links}
                </ul>
            </div>
        );
    }
}

export default Resources;
