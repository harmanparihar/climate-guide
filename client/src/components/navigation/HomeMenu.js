import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class HomeMenu extends Component {
  render() {
        // const pages = ['home', 'causes', 'effects', 'solutions', 'about', 'contact'];
        let pages = ["home", "causes & effects", "get involved", "about"];

        const navLinks = pages.map((page, i) => {
          return (
            <li key={i}>
            {page=="home" ? (<NavLink to={"/"} activeClassName="active">{page}
            </NavLink>) : (<NavLink to={"/" + page} activeClassName="">{page}
            </NavLink>)}


            </li>
            );
        });

        return (
          <nav className="menu-home">
          <ul>{navLinks}</ul>
          </nav>
          );
      }
    }

    export default HomeMenu;
