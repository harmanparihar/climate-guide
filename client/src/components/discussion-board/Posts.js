import React from 'react';
export default class Posts extends React.Component{
  constructor(){
    super();
    this.state={
      reply: {
        name: "",
        text: "",
      }
    };
  }
  incrementUps(index){
    this.props.incrementUps(index);
  };
  handleChange(e){
    this.setState({
      reply: {name:this.props.name, text:e.target.value}
    });
  }
  deletePost(e,index){
    if(window.confirm("Do you really want to delete this post permenantly?"))
    {
      console.log(e.target.parentElement.parentElement.parentElement.remove());
      this.props.deletePost(index);
    }
  }
  reply(event,index){
    event.preventDefault();
    if(this.state.text!=""){
    console.log('reply submit');
    console.log(this.state.name);
    console.log(this.state.text);
    console.log(this.state);
    console.log(this.props.name);
    this.props.reply(index,this.state.reply.name,this.state.reply.text);
  } else{
    alert("Please enter your reply before posting!");
  }
  }
  render(){
    var posts = this.props.data;
    posts = posts.map(function(item,index){
      return(
      <div  key={index} id ={this.props.data[index]._id}>
        <div className="post">
          <h3>
            <img src="./user.png" alt="user icon"/>{this.props.data[index].username}
            {(this.props.name==this.props.data[index].username) ? <i onClick={(e) => this.deletePost(e,index)}  className="delete fas fa-trash-alt"></i> : null}
          </h3>
          <p>
            {this.props.data[index].comment}
          </p>
          <div className="like_button">
          <div>{this.props.data[index].likes} likes</div>
            <i onClick={() => this.incrementUps(index)} className="upvote" className="fas fa-thumbs-up"></i>
          </div>
          <form className="reply">
            <input onChange={(e)=>this.handleChange(e)} placeholder="Add Your Comment" type="text" name="fname"/>
            <button type="submit" onClick={(event) => this.reply(event,index)} className="reply_submit"> Reply </button>
          </form>
          <ul className="ul_reply">
          {this.props.data[index].reply.length ? this.props.data[index].reply.map(item => (
            <li key={item.name+item.text}><span>@{item.name} </span>: {item.comment}</li>
          )) : null}
          </ul>
        </div>
        <hr/>
      </div> );
    }.bind(this));
    return(
      <div className="post_section">
      {posts}
      </div>
    );
  }
}
