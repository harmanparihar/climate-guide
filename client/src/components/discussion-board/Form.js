import React from 'react';
export default class Form extends React.Component{
  constructor(){
    super();
    this.state = {
      name: "",
      username : "",
      comment : "",
      likes : 0,
    }
  }
  handleChangeusername(event) {
    this.setState({username: event.target.value});
  }
  handleChangecomment(event) {
    this.setState({comment: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
      console.log(this.state);
      this.props.data.push(this.state);
      this.props.updatedb(this.props.data);
      fetch(`http://localhost:8080/fetch/`, {method: 'POST',headers: {
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
  }
  render(){
    return(
      <form className="add_post_form" onSubmit={this.handleSubmit.bind(this)}>
        <input onChange={this.handleChangeusername.bind(this)} id="post_username" type="text" placeholder="Username"/>
        <textarea onChange={this.handleChangecomment.bind(this)} id="post_text" name="post" rows="4" cols="50"  placeholder={this.props.placeholder_text}></textarea>
      <button id="submit">Post</button>
      </form>
    );
  }
}
