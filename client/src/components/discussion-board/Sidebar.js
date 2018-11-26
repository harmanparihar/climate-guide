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
        <h4>Hello {this.props.name}!</h4>
        </div>

        <p>Welcome to the Climate Guide community. Here you can discuss and find tips from experts on how to fight climate change. We believe together, we can truly make an impact and make our planet healthier.</p>
        <p>Join the conversation!</p>
         <button className="logout-button">
         <Link to="#" className="btn btn-link text-secondary" onClick={(event)=>this.clickhandler(event)}>
         <span className="text-secondary">Logout</span></Link>
         </button>
        </div>
    );
  }
}
