import React, {Component} from 'react';
import NavMenu from './navigation/NavMenu';
import SupportButton from './navigation/SupportButton';
import logoHor from './assets/logo/cg_hor.svg';

class Header extends Component {
    render() {
        return (
            <header className="site-header">
                <div className="site-title">
                    <a href="#home">
                        {/* <img className="site-logo" /> */}
                        <span className="site-logo"><img src={logoHor} alt="ClimateGuide" className="hor_logo"/></span>
                    </a>
                </div>

                <NavMenu className="header-nav" />

                <div className= "search-form">
               
                    <input
                        type="search"
                        className="search-field"
                        title="Enter a keyword..."
                        placeholder="Search"
                    />
                     <i className="fa fa-search"></i>
                    <button type="submit" className="search-submit"></button>
                </div>

                <SupportButton />
            </header>
        );
    }
}

export default Header;
