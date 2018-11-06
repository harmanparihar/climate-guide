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
    if(this.state.show_form == false)
    {
      this.setState({show_form:true});
    }
    else{
      this.setState({show_form:false});
    }
  }
  componentDidMount(){
    this.serverRequest = axios
    .get('http://localhost:8080/fetch', {mode: 'no-cors'})
    .then(function(result){
      var tempposts = result.data;
      console.log("Result is");
      console.log(result);
      this.setState({
        data:tempposts
      });
    }.bind(this));
    // this.postServer = axios
    // .post('http://localhost:8080/fetch',  this.state.data)
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    // this.update = setInterval(this.postServer, 2000);
  }
  incrementUpvotes(index){
    var temp = this.state.data;
    temp[index].likes = temp[index].likes+1;
    this.setState(temp);
    fetch('http://localhost:8080/fetch', {method: 'POST'})
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
    this.serverRequest.abort();
    clearInterval(this.update)
  }
  render(){
    return(
        <main>
          <h1>Get Involved</h1>
          <div className="add_post">
          <button id="new_post" onClick={this.clickHandler.bind(this)}><span className="add_symbol">+ </span>Add New Post</button>
          {this.state.show_form ? <Form placeholder_text="Share your thoughts"/> : null}
          </div>
          <Posts data={this.state.data} incrementUps={this.incrementUpvotes.bind(this)}/>
        </main>
    );
  }
}
