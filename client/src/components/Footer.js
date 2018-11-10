import React, {Component} from 'react';
import NavMenu from "./navigation/NavMenu";
import SocialMenu from "./navigation/SocialMenu";

class Footer extends Component {
    render() {
        return (
            <footer className="site-footer">
                <NavMenu className="footer-nav" />
                <SocialMenu className="footer-social" />
            </footer>
        );
    }
}

export default Footer
