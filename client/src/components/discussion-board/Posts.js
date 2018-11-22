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
    console.log(e.target.parentElement.parentElement.parentElement.remove());
    this.props.deletePost(index);
  }
  reply(event,index){
    event.preventDefault()
    console.log('reply submit');
    console.log(this.state.name);
    console.log(this.state.text);
    console.log(this.state);
    console.log(this.props.name);
    this.props.reply(index,this.state.reply.name,this.state.reply.text);
  }
  render(){
    var posts = this.props.data;
    posts = posts.map(function(item,index){
      return(
      <div  key={index} id ={this.props.data[index]._id}>
        <div className="post">
          <h3>
            <img src="./user.png" alt="user icon"/>{this.props.data[index].username}
          </h3>
          <p>
            {this.props.data[index].comment}
          </p>
          <div className="like_button">{this.props.data[index].likes}
            <button onClick={() => this.incrementUps(index)} className="upvote"> Upvote </button>
            <button onClick={(e) => this.deletePost(e,index)} className="delete"> Delete </button>
          </div>
          <form className="reply">
            <input onChange={(e)=>this.handleChange(e)} placeholder="Add Your Comment" type="text" name="fname"/>
            <button type="submit" onClick={(event) => this.reply(event,index)} className="reply_submit"> Reply </button>
          </form>
          {this.props.data[index].reply.map(item => (
            <li key={item.text}>{item.name} : {item.comment}</li>
          ))}
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
