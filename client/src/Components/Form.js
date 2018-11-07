import React from 'react';
export default class Form extends React.Component{
  clickHandler(){
    
  }
  render(){
    return(
      <form className="add_post_form">
        <textarea name="post" rows="4" cols="50" placeholder={this.props.placeholder_text}></textarea>
      <button onClick={this.clickHandler.bind(this)} id="submit">Post</button>
      </form>
    );
  }
}
