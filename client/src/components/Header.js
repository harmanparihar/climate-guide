import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import NavMenu from './navigation/NavMenu';
import SupportButton from './navigation/SupportButton';
import logoSymbol from './assets/logos/cg_symbol.svg';
import Search from './navigation/Search';
import MobileMenu from './navigation/MobileMenu';

class Header extends Component {
    constructor() {
        super();
                
        this.state = {
            isTop: true,
        };
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 700;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        });
    }

    render() {
        return (
            <header className={this.state.isTop ? 'site-header' : 'site-header slide'}>
            <div className="site-title">
            <Link to="/">
            <span className="site-logo"><img src={logoSymbol} alt="ClimateGuide" className="hor_logo"/></span>
            </Link>
            </div>

            <NavMenu className="header-nav" />

            <Search />
            <MobileMenu />
            <SupportButton />
            </header>
        );
    }
}

export default Header;
