import React, { Component } from "react";
import LogoColor from '../assets/logos/cg_color_hor.svg';
import { Link } from 'react-router-dom'
import SupportButton from '../navigation/SupportButton';
import Search from '../navigation/Search'



class HomeHeader extends Component {

	render() {
		return (
			<div className="home_header">
			<div className="site-title">
				<Link to="/">
				<span className="site-logo"><img src={LogoColor} alt="ClimateGuide" className="hor_logo"/></span>
				</Link>
				<h1>Small Actions, Big Change</h1>
			</div>
			<Search />
			<SupportButton />
			</div>
			);
		}
	}

	export default HomeHeader;
