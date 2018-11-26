import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class SupportButton extends Component {


    render() {
        return (
            <Link to="/get involved" className="btn btn-link text-secondary"><button className="support-us">Support Us</button></Link>
        );
    }
}

export default SupportButton;
