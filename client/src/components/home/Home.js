import React, {Component} from 'react';
import HomeHeader from '../home/HomeHeader';
import HomeMenu from '../navigation/HomeMenu';

import Carousel from './Carousel';
import ExpandCollapse from './ExpandCollapse';

class Home extends Component {
	render() {
		return (
			<div className="Home wrapper">
			<HomeHeader />

			<Carousel />
			<HomeMenu />
			<ExpandCollapse />

			</div>
			);
		}
	}

	export default Home;
