import React, {Component} from 'react';

import papers from '../assets/icons/papers.svg';
import treeForest from '../assets/icons/tree-forest.svg';
import co2Pollution from '../assets/icons/co2-pollution.svg';
import trucks from '../assets/icons/trucks.svg';
import plus from '../assets/icons/plus.svg';
import minus from '../assets/icons/minus.svg';
class Interactive extends Component {
    constructor(props) {
        super(props);

        this.state = {
            first: [0, plus],
            second: [0, plus],
            third: [0, plus]
        };

        this.first = this.first.bind(this);
        this.second = this.second.bind(this);
        this.third = this.third.bind(this);
    }

    first() {
        this.setState({
            first: [this.state.first[0] === 0 ? 1 : 0, this.state.first[1] === plus ? minus : plus]
        });
    }

    second() {
        this.setState({
            second: [this.state.second[0] === 0 ? 1 : 0, this.state.second[1] === plus ? minus : plus]
        });
    }

    third() {
        this.setState({
            third: [this.state.third[0] === 0 ? 1 : 0, this.state.third[1] === plus ? minus : plus]
        });
    }

    render() {
        return (
           <div className={"viz " + this.props.className} >
           <img src={this.props.src1} alt="viz" className="img_base" />
           <button onClick={this.first} className="viz_btn first"> <img src={this.state.first[1]}/></button>
          
           <button onClick={this.second} className="viz_btn second"> 
           <img src={this.state.second[1]}/></button>
           {this.props.className === "tips-paper" ? <button onClick={this.third} className="viz_btn third"> <img src={this.state.third[1]}/></button> : null}
           {this.props.className === "tips-plastic" ? <button onClick={this.third} className="viz_btn third"> <img src={this.state.third[1]}/></button> : null}
           <img src={this.props.src2} alt="viz" style={{opacity: this.state.first[0]}} />
           <img src={this.props.src3} alt="viz" style={{opacity: this.state.second[0]}} />
           {this.props.className === "tips-paper" ? <img src={this.props.src4} alt="viz" style={{opacity: this.state.third[0]}} /> : null}
           {this.props.className === "tips-plastic" ? <img src={this.props.src4} alt="viz" style={{opacity: this.state.third[0]}} /> : null}
           </div>
           );
       }
   }

   export default Interactive;
