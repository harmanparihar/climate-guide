import React, { Component } from "react";

class HomeMenu extends Component {
    render() {
        // const pages = ['home', 'causes', 'effects', 'solutions', 'about', 'contact'];
        let pages = ["tips", "causes & effects", "get involved", "about"];

        const navLinks = pages.map((page, i) => {
            return (
                <li key={i}>
                    <a href={"#" + page}>{page}</a>
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
