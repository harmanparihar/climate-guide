import React from 'react';
export default class Posts extends React.Component{
  incrementUps(index){
    this.props.incrementUps(index);
  };
  deletePost(index){
    this.props.deletePost(index);
  }
  render(){
    var posts = this.props.data;
    posts = posts.map(function(item,index){
      return(<div  key={index} id ={this.props.data[index]._id}><div className="post">
      <h3><img src="./user.png" alt="user icon"/>{this.props.data[index].username}</h3>
      <p>{this.props.data[index].comment}</p>
      <div className="like_button">{this.props.data[index].likes} <button onClick={() => this.incrementUps(index)} className="upvote"> Upvote </button><button onClick={() => this.deletePost(index)} className="delete"> Delete </button></div>
      <form className="reply">
        <input placeholder="Add Your Comment" type="text" name="fname"/>
      </form>
      </div> <hr/></div> );
    }.bind(this));
    return(
      <div className="post_section">
      {posts}
      </div>
    );
  }
}
