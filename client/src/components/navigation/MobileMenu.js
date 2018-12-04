import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'
import SupportButton from './SupportButton';

class MobileMenu extends Component {
   constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
   closeMenu () {
    this.setState({menuOpen: false});
  }
  

	render() {
        // const pages = ['home', 'causes', 'effects', 'solutions', 'about', 'contact'];
        let pages = ["home", "causes & effects", "get involved", "about"];

        const navLinks = pages.map((page, i) => {
        	return (
        		<li key={i}>
            {page==="home" ? (<NavLink to={"/"} activeClassName="" onClick={() => this.closeMenu()}>{page}
              </NavLink>) : (<NavLink to={"/" + page} activeClassName="active" onClick={() => this.closeMenu()}>{page}
              </NavLink>)}
              </li>
              );
          });

          return (

           <Menu isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)} right className="responsive_menu">
           <nav className={this.props.className}>
           <SupportButton />
           <ul>{navLinks}</ul>
           </nav>
           </Menu>

           );
         }
       }

       export default MobileMenu;
