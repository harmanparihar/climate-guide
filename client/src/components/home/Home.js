import React, {Component} from 'react';
import HomeMenu from '../navigation/HomeMenu';

import Carousel from './Carousel';
import ExpandCollapse from './ExpandCollapse';

class Home extends Component {
    render() {
    	return (
    		<div className="Home">

              <Carousel />
              <HomeMenu />
              <ExpandCollapse />

            </div>
    	);
    }
}

export default Home;
