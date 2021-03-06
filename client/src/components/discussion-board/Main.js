import React from 'react';
import Posts from './Posts';
import axios from 'axios';
import Form from './Form';
import Sidebar from './Sidebar';
import Header from '../Header';
import path_backend from './path';

export default class Main extends React.Component{
  constructor(){
    super();
    this.state = {
      show_form : false,
      data : [],
      name: "",
      username: "",
      loggedIn: false
    }
  }
  clickHandler(){
    if(this.state.show_form === false)
    {
      this.setState({show_form:true});
    }
    else{
      this.setState({show_form:false});
    }
  }
  componentDidMount(){
    this.serverRequest = axios
    .get(`${path_backend}/fetch`)
    .then(function(result){
      var tempposts = result.data;
      console.log("Result is");
      console.log(result);
      this.setState({
        data:tempposts.reverse()
      });
    }.bind(this));
    this.setState({
      name: this.props.userObj.name,
      username: this.props.username,
    })
  }
  updateData(){
    // this.setState();
    fetch(`${path_backend}/fetch`, {method: 'GET'})
    .then(response => response.json())
    .then(jsondata => {
        console.log(this.state.data)
        this.setState({data: jsondata.reverse()})
        console.log(this.state.data)
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  incrementUpvotes(index){
    var temp = this.state.data;
    temp[index].likes = temp[index].likes+1;
    this.setState(temp);
    fetch(`${path_backend}/fetch/${temp[index]._id}`, {method: 'PUT',headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },body: JSON.stringify(this.state.data[index])})
    .then(function(response) {
      if(response.ok) {
        console.log('Click was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
  };
  reply(index,name,text){
    var temp = this.state.data;
    temp[index].reply.push({name: name, comment:text});
    this.setState(temp);
    fetch(`${path_backend}/fetch/${temp[index]._id}`, {method: 'PUT',headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },body: JSON.stringify(this.state.data[index])})
    .then(function(response) {
      if(response.ok) {
        console.log('Click was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
  };
  deletePost(index){
    var temp = this.state.data;
    const hulu_obj_ref =this;
    fetch(`${path_backend}/fetch/${temp[index]._id}`, {method: 'DELETE',headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        }})
    .then(function(response) {
      if(response.ok) {
        console.log('Record was deleted');
        hulu_obj_ref.updateData();
        return;

      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
  }
  render(){
    return(
       <div className="fixed-header">
      <Header/>
        <main>
          <Sidebar name={this.state.name} logout={this.props.logout}/>
          <div className="wrap">
            <div className="add_post">
            <button id="new_post" onClick={this.clickHandler.bind(this)}><span className="add_symbol">+ </span>Add New Post</button>
            {this.state.show_form ? <Form name={this.state.name} data={this.state.data} updatedb={this.updateData.bind(this)} placeholder_text="Share your thoughts"/> : null}
            </div>
            <Posts name={this.state.name} data={this.state.data} deletePost={this.deletePost.bind(this)} incrementUps={this.incrementUpvotes.bind(this)} reply={this.reply.bind(this)}/>
          </div>
        </main>
        </div>
    );
  }
}
