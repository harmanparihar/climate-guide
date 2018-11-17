import React from 'react'
import Coverflow from 'react-coverflow'

class Carousel extends React.Component{



  render(){

    return(

      <div className="carousel-container">

        <Coverflow
          width={400}
          height={450}
          displayQuantityOfSlide={0.5}
          infiniteScroll={true}
          navigation={true}
          enableHeading={false}
          active={0}
        >

          <img src='images/bus-camper.jpg' alt='Travelling into bus can save 2 tons of gas per year.' />

          <img src='images/coffee-cup.jpg' alt='1 cup can save 2 million trees.' />

          <img src='images/book-collection.jpg' alt='Paper really helps to reduce waste.' />

          <img src='images/evening.png' alt='This pic clicked in evening.' />

          <img src='images/sunset.jpg' alt='This is the sunset pic.' />

        </Coverflow>
      </div>

    )//end return

  }//end render

}//end class

export default Carousel
