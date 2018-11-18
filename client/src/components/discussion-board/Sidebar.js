import React from 'react';
import { Link } from 'react-router-dom'

export default class Sidebar extends React.Component{
  render(){
    return(
        <div className="sidebar">
        <div>
        <h4>Welcome Username!</h4>
        <button>
        Logout
        </button>
        </div>

        <h4>Get Involved</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique corrupti repellat eum ipsum esse reiciendis, aut, iste tenetur necessitatibus natus consequatur cum ex doloribus nam ratione, sint quos aperiam.
         Aliquid!</p>
         <h4>Quick Links</h4>
         <Link to="/" className="btn btn-link text-secondary">
         <span className="text-tertiary">Home Page</span>
         </Link>
         <Link to="/causes" className="btn btn-link text-secondary">
         <span className="text-tertiary">Causes</span>
         </Link>
        </div>
    );
  }
}
