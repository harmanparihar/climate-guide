import React, {Component} from 'react';
import NavMenu from "./navigation/NavMenu";
import SocialMenu from "./navigation/SocialMenu";
import logoSymbol from './assets/logos/cg_symbol.svg';
import { Link } from 'react-router-dom'


class Footer extends Component {
	render() {
		return (
			<footer className="site-footer">
			<div className="site-title">
			<Link to="/">
		{/* <img className="site-logo" /> */}
		<span className="site-logo"><img src={logoSymbol} alt="ClimateGuide" className="hor_logo"/></span>
		</Link>
		</div>
		<NavMenu className="footer-nav" />
		<SocialMenu className="footer-social" />
		<div className="copyright">climateguide © </div>
		</footer>
		);
	}
}

export default Footer;
