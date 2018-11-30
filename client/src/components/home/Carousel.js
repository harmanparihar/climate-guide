import React from 'react';
import CoverFlow from 'react-coverflow';

import bus from '../assets/images/bus-camper.jpg';
import coffee from '../assets/images/coffee-cup.jpg';
import book from '../assets/images/book-collection.jpg';
import automobiles from '../assets/images/automobiles.jpg';
import sunset from '../assets/images/sunset.jpg';

class Carousel extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      isActive: false
    }
  }

  openPage = () =>{

    this.setState = {
      isActive: true
    }
    const isActive = this.state.isActive

    if(isActive){
      window.open("https://www.youtube.com")
    }

  }

  render() {
    return (

      <div className="carousel-container">

        <CoverFlow
          width={400}
          height={450}
          displayQuantityOfSide={0.5}
          infiniteScroll={true}
          navigation={false}
          enableHeading={true}
          enableScroll={false}
          active={0}
        >

            <img src={bus} alt='Transit Facts!' />

            <img src={coffee} id="hello" alt='Plastic Recyling Facts!' onClick={this.openPage} />

            <img src={book} alt='Paper Recycling Facts!' />

            <img src={automobiles} alt='Causes for Global Warming' />

            <img src={sunset} alt='Energy Conservation Facts!' />

        </CoverFlow>
      </div>

    )//end return

  }//end render

}//end class

export default Carousel;
