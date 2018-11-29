import React from 'react';
import path_backend from './path';

export default class Form extends React.Component{
  constructor(){
    super();
    this.state = {
      username : "",
      comment : "",
      likes : 0,
      reply: [],
    }
  }
  // handleChangeusername(event) {
  //   this.setState({username: event.target.value});
  // }
  handleChangecomment(event) {
    this.setState({username:this.props.name,
    comment: event.target.value});
  }
  handleSubmit(event){
    event.preventDefault();
      console.log(this.state);
      this.props.data.unshift(this.state);
      this.props.updatedb(this.props.data);
      fetch(`${path_backend}/fetch/`, {method: 'POST',headers: {
              "Content-Type": "application/json; charset=utf-8",
              // "Content-Type": "application/x-www-form-urlencoded",
          },
          body : JSON.stringify(this.state),
          })
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
      this.setState({comment:""});
  }
  render(){

    return(
      <form className="add_post_form" onSubmit={this.handleSubmit.bind(this)}>
        <textarea onChange={this.handleChangecomment.bind(this)} value={this.state.comment} id="post_text" name="post" rows="4" cols="50"  placeholder={this.props.placeholder_text}></textarea>
      <button id="submit">Post</button>
      </form>
    );
  }
}
