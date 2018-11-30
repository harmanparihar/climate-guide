import React, {Component} from 'react';

import papers from '../assets/icons/papers.svg';
import treeForest from '../assets/icons/tree-forest.svg';
import co2Pollution from '../assets/icons/co2-pollution.svg';
import trucks from '../assets/icons/trucks.svg';

class PaperInteractive extends Component {
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
            <div className="viz">
                <img src={papers} alt="viz" />
                <button onClick={this.first}>{this.state.first[1]}</button>
                <button onClick={this.second}>{this.state.second[1]}</button>
                <button onClick={this.third}>{this.state.third[1]}</button>
                <img src={treeForest} alt="viz" style={{opacity: this.state.first[0]}} />
                <img src={co2Pollution} alt="viz" style={{opacity: this.state.second[0]}} />
                <img src={trucks} alt="viz" style={{opacity: this.state.third[0]}} />
            </div>
        );
    }
}

export default PaperInteractive;
