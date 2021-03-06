import React, {Component} from 'react';

import plus from '../assets/icons/plus.svg';
import minus from '../assets/icons/minus.svg';
class Interactive extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: ["none", plus],
      second: ["none", plus],
      third: ["none", plus]
    };

    this.first = this.first.bind(this);
    this.second = this.second.bind(this);
    this.third = this.third.bind(this);
  }

  first() {
    this.setState({
      first: [this.state.first[0] === "none" ? "block" : "none", this.state.first[1] === plus ? minus : plus]
    });
  }

  second() {
    this.setState({
      second: [this.state.second[0] === "none" ? "block" : "none", this.state.second[1] === plus ? minus : plus]
    });
  }

  third() {
    this.setState({
      third: [this.state.third[0] === "none" ? "block" : "none", this.state.third[1] === plus ? minus : plus]
    });
  }

  render() {
    return (
      <div className={"vis  " + this.props.className} >
          <img src={this.props.src1} alt="Visualization" className="img_base" />

          <button onClick={this.first} className="vis_btn first">
              <img src={this.state.first[1]} alt="Button toggle" />
          </button>

          <img src={this.props.src2} alt="Visualization" style={{display: this.state.first[0]}} className="vis_img_1" />

          <button onClick={this.second} className="vis_btn second">
              <img src={this.state.second[1]} alt="Button toggle" />
          </button>

          <img src={this.props.src3} alt="Visualization" style={{display: this.state.second[0]}} className="vis_img_2" />

          {this.props.className === "tips-paper" ? <button onClick={this.third} className="vis_btn third"><img src={this.state.third[1]} alt="Button toggle" /></button> : null}

          {this.props.className === "tips-plastic" ? <button onClick={this.third} className="vis_btn third"><img src={this.state.third[1]} alt="Button toggle" /></button> : null}

          {this.props.className === "tips-paper" ? <img src={this.props.src4} alt="Visualization" style={{display: this.state.third[0]}} className="vis_img_3" />  : null}

          {this.props.className === "tips-plastic" ? <img src={this.props.src4} alt="Visualization" style={{display: this.state.third[0]}} className="vis_img_3"/> : null}

      </div>
      );
    }
  }

  export default Interactive;
