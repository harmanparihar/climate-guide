import React from 'react';
export default class Posts extends React.Component{
  incrementUps(index){
    this.props.incrementUps(index);
  };

  render(){
    var posts = this.props.data;
    posts = posts.map(function(item,index){
      return(<div className="post" key={index}>
      <h3>{this.props.data[index].username}</h3>
      <p>{this.props.data[index].comment}</p>
      <div className="like_button">{this.props.data[index].likes} <a onClick={() => this.incrementUps(index)} className="upvote"> Upvote </a></div>
      </div>);
    }.bind(this));
    return(
      <div>
      {posts}
      </div>
    );
  }
}
