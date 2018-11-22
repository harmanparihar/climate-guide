import React, { Component } from 'react';

class SocialMenu extends Component {
    render() {
        const pages = ['facebook', 'instagram', 'youtube'];
        const navLinks = pages.map((page, i) => {
            return (
                <li key={i}>
                    <a href={"https://" + page + '.com'}>
                        <span className={'fab fa-' + page}></span>
                    </a>
                </li>
            )
        });

        return (
            <nav className={this.props.className}>
            <ul>{navLinks}</ul>
            </nav>
        );
    }
}

export default SocialMenu
