import React from 'react';
import CoverFlow from 'react-coverflow';

import bus from '../assets/images/bus-camper.jpg';
import coffee from '../assets/images/coffee-cup.jpg';
import book from '../assets/images/book-collection.jpg';
import automobiles from '../assets/images/automobiles.jpg';
import sunset from '../assets/images/sunset.jpg';

class Carousel extends React.Component{
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
          active={0}
        >

            <img src={bus} alt='Travelling into bus can save 2 tons of gas per year.' />

            <img src={coffee} alt='1 cup can save 2 million trees.' />

            <img src={book} alt='Paper really helps to reduce waste.' />

            <img src={automobiles} alt='This pic clicked in evening.' />

            <img src={sunset} alt='This is the sunset pic.' />

        </CoverFlow>
      </div>

    )//end return

  }//end render

}//end class

export default Carousel;
