import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'
import SupportButton from './SupportButton';

class MobileMenu extends Component {
	render() {
        // const pages = ['home', 'causes', 'effects', 'solutions', 'about', 'contact'];
        let pages = ["tips", "causes & effects", "get involved", "about"];

        const navLinks = pages.map((page, i) => {
        	return (
        		<li key={i}>
        		<NavLink to={"/" + page} activeClassName="active">
        		{page}
        		</NavLink>
        		</li>
        		);
        });

        return (
        	
        	<Menu right className="responsive_menu">
        	<nav className={this.props.className}>
        	<SupportButton />
            <ul>{navLinks}</ul>
        	</nav>
        	</Menu>

        	);
        }
      }

      export default MobileMenu;
