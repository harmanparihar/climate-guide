import React, { Component } from "react";
import { Link } from 'react-router-dom'

class HomeMenu extends Component {
    render() {
        // const pages = ['home', 'causes', 'effects', 'solutions', 'about', 'contact'];
        let pages = ["tips", "causes", "get involved", "about"];

        const navLinks = pages.map((page, i) => {
            return (
              <li key={i}>
              <Link to={"/" + page}>
                  <a href={"#" + page}>{page}</a>
              </Link>
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
