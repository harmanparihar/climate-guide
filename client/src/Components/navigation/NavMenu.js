import React, { Component } from "react";

class NavMenu extends Component {
    render() {
        // const pages = ['home', 'causes', 'effects', 'solutions', 'about', 'contact'];
        let pages = [];
        this.props.className === "header-nav"
        ? (pages = ["causes", "effects", "solutions", "about", "contact"])
        : (pages = ["home", "causes", "effects", "solutions", "about", "contact"]);

        const navLinks = pages.map((page, i) => {
            return (
                <li key={i}>
                <a href={"#" + page}>{page}</a>
                </li>
            );
        });

        return (
            <nav className={this.props.className}>
            <ul>{navLinks}</ul>
            </nav>
        );
    }
}

export default NavMenu;
