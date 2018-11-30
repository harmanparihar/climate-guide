import React, {Component} from 'react';

import papers from '../assets/icons/papers.svg';
import treeForest from '../assets/icons/tree-forest.svg';
import co2Pollution from '../assets/icons/co2-pollution.svg';
import trucks from '../assets/icons/trucks.svg';

class Interactive extends Component {
    constructor(props) {
        super(props);

        this.state = {
            first: [0, "+"],
            second: [0, "+"],
            third: [0, "+"]
        };

        this.first = this.first.bind(this);
        this.second = this.second.bind(this);
        this.third = this.third.bind(this);
    }

    first() {
        this.setState({
            first: [this.state.first[0] === 0 ? 1 : 0, this.state.first[1] === "+" ? "-" : "+"]
        });
    }

    second() {
        this.setState({
            second: [this.state.second[0] === 0 ? 1 : 0, this.state.second[1] === "+" ? "-" : "+"]
        });
    }

    third() {
        this.setState({
            third: [this.state.third[0] === 0 ? 1 : 0, this.state.third[1] === "+" ? "-" : "+"]
        });
    }

    render() {
        return (
 <div className={"viz " + this.props.className} >
                 <img src={this.props.src1} alt="viz" />
                <button onClick={this.first}>{this.state.first[1]}</button>
                <button onClick={this.second}>{this.state.second[1]}</button>
                {this.props.className === "tips-paper" ? <button onClick={this.third}>{this.state.third[1]}</button> : null}
                {this.props.className === "tips-plastic" ? <button onClick={this.third}>{this.state.third[1]}</button> : null}
                <img src={this.props.src2} alt="viz" style={{opacity: this.state.first[0]}} />
                <img src={this.props.src3} alt="viz" style={{opacity: this.state.second[0]}} />
                {this.props.className === "tips-paper" ? <img src={this.props.src4} alt="viz" style={{opacity: this.state.third[0]}} /> : null}
                {this.props.className === "tips-plastic" ? <img src={this.props.src4} alt="viz" style={{opacity: this.state.third[0]}} /> : null}
            </div>
        );
    }
}

export default Interactive;
