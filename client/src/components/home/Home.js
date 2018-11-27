import React, {Component} from 'react';
import HomeHeader from '../home/HomeHeader';
import HomeMenu from '../navigation/HomeMenu';

import Carousel from './Carousel'

import HomeIntro from './HomeIntro'
import ExpandCollapsePaper from './ExpandCollapsePaper'
import ExpandCollapsePlastic from './ExpandCollapsePlastic'
import ExpandCollapseTransit from './ExpandCollapseTransit'
import ExpandCollapseElectricity from './ExpandCollapseElectricity'
import sunset from '../assets/images/sunset.jpg';

class Home extends Component {
	constructor(){
		super();
		this.state={
			show:true,
		}
	}

  handleWindowResize = () => {
    this.setState({ show: window.innerWidth > 768 });
  }

  componentDidMount() {
		this.handleWindowResize();
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }
	render() {
		return (
			<div className="oval">

      <img src={sunset} className="img_intro"/>

			<div className="Home wrapper">
			<HomeHeader />
			{this.state.show ? <Carousel /> : null}


			<HomeMenu />

			<HomeIntro />

			<ExpandCollapsePaper />
			<ExpandCollapsePlastic />
			<ExpandCollapseTransit />
			<ExpandCollapseElectricity />

			</div>
			</div>

			);
		}
	}

	export default Home;
