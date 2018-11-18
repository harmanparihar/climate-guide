import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import NavMenu from './navigation/NavMenu';
import SupportButton from './navigation/SupportButton';
import logoSymbol from './assets/logos/cg_symbol.svg';
import Search from './navigation/Search'
import MobileMenu from './navigation/MobileMenu'

class Header extends Component {
    render() {
        return (
            <header className="site-header">
            <div className="site-title">
            <Link to="/">
        {/* <img className="site-logo" /> */}
        <span className="site-logo"><img src={logoSymbol} alt="ClimateGuide" className="hor_logo"/></span>
        </Link>
        </div>

        <NavMenu className="header-nav" />

        <Search />

        <SupportButton />
        <MobileMenu /> 
        </header>
        );
    }
}

export default Header;
