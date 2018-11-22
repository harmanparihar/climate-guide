import React from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends React.Component{

  clickhandler(event){
    console.log("btn clicked");
    this.props.logout(event);
  }
  render(){
    return(
        <div className="sidebar">
        <div>
        <h4>Welcome {this.props.name}</h4>
        </div>

        <h4>Get Involved</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique corrupti repellat eum ipsum esse reiciendis, aut, iste tenetur necessitatibus natus consequatur cum ex doloribus nam ratione, sint quos aperiam.
         Aliquid!</p>
         <button className="logout-button">
         <Link to="#" className="btn btn-link text-secondary" onClick={(event)=>this.clickhandler(event)}>
         <span className="text-secondary">Logout</span></Link>
         </button>
        </div>
    );
  }
}
