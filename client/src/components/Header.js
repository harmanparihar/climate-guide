import React, {Component} from 'react';
import NavMenu from './navigation/NavMenu';
import SupportButton from './navigation/SupportButton';

class Header extends Component {
    render() {
        return (
            <header className="site-header">
                <div className="site-title">
                    <a href="#home">
                        {/* <img className="site-logo" /> */}
                        <span className="site-logo">LOGO</span>
                        <h1>ClimateGuide</h1>
                    </a>
                </div>

                <NavMenu className="header-nav" />

                <div className="search-form">
                    <input
                        type="search"
                        className="search-field"
                        title="Enter a keyword..."
                        placeholder="Search"
                    />
                    <button type="submit" className="search-submit"></button>
                </div>

                <SupportButton />
            </header>
        );
    }
}

export default Header;
