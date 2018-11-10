import React from 'react';
import Posts from './Posts';
import axios from 'axios';
import Form from './Form';
export default class Main extends React.Component{
  constructor(){
    super();
    this.state = {
      show_form : false,
      data : []
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
    .get('http://localhost:8080/fetch')
    .then(function(result){
      var tempposts = result.data;
      console.log("Result is");
      console.log(result);
      this.setState({
        data:tempposts
      });
    }.bind(this));
  }
  updateData(temp){
    this.setState(temp);
  }
  // deletePost(index){
  //
  // }
  incrementUpvotes(index){
    var temp = this.state.data;
    temp[index].likes = temp[index].likes+1;
    this.setState(temp);
    fetch(`http://localhost:8080/fetch/${temp[index]._id}`, {method: 'PUT',headers: {
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
  componentWillUnmount(){
    // clearInterval(this.update)
    this.serverRequest.abort();
  }
  render(){
    return(
        <main>
          <h1>Get Involved</h1>
          <div className="add_post">
          <button id="new_post" onClick={this.clickHandler.bind(this)}><span className="add_symbol">+ </span>Add New Post</button>
          {this.state.show_form ? <Form data={this.state.data} updatedb={this.updateData.bind(this)} placeholder_text="Share your thoughts"/> : null}
          </div>
          <Posts data={this.state.data} incrementUps={this.incrementUpvotes.bind(this)}/>
        </main>
    );
  }
}
