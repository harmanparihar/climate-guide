import React, {Component} from 'react';
import HomeHeader from '../home/HomeHeader';
import HomeMenu from '../navigation/HomeMenu';

import Carousel from './Carousel'

import HomeIntro from './HomeIntro'

import ExpandCollapsePaper from './ExpandCollapsePaper'
import ExpandCollapsePlastic from './ExpandCollapsePlastic'
import ExpandCollapseTransit from './ExpandCollapseTransit'
import ExpandCollapseElectricity from './ExpandCollapseElectricity'

class Home extends Component {
	render() {
		return (
			<div className="Home wrapper">
			<HomeHeader />

			<Carousel />
			<HomeMenu />

			<HomeIntro />

			<ExpandCollapsePaper />
			<ExpandCollapsePlastic />
			<ExpandCollapseTransit />
			<ExpandCollapseElectricity />

			</div>
			);
		}
	}

	export default Home;
