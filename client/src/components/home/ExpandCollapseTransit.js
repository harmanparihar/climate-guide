import React from 'react';
import AnimateHeight from 'react-animate-height';
import carSmoke from '../assets/icons/transit-colour.svg';
import bus from '../assets/icons/bus_transit.svg';
import ton from '../assets/icons/ton.svg';
import money from '../assets/icons/money.svg';

import Interactive from './Interactive';

class ExpandCollapseTransit extends React.Component{

  state = {
    height: 0
  }

  toggle = () => {
    const { height } = this.state;

    this.setState({
      height: height === 0 ? 'auto' : 0
    })
  }

  render(){

    const { height } = this.state

    return(

      <div className="expand-collapse-container container">

          <div className="container-head">

              <div className="heading">
                  <img src={carSmoke} alt='Causes' className="icon" />

                  <h2>Transit</h2>
                  <p className="font-weight-medium">Transit Facts!</p>
              </div>

              <button className="btn" onClick={this.toggle}>
                  { height === 0 ? 'Expand' : 'Collapse' }
              </button>

          </div>

          <p>By taking the bus to work for a year, ONE person, can prevent 4800 pounds of carbon pollution (that’s over 2 tons!), and saves an average of US$6200.</p>

          <div className="container-body">

              <AnimateHeight
                  duration={600}
                  height={height}
              >

                  <Interactive
                      className="tips-transit"
                      src1={bus}
                      src2={ton}
                      src3={money}
                  />

                  <div className="tips-container">

                      <p className="font-weight-medium">Tips! How you can make a difference</p>

                      <ol className="tips-list">
                          <li>
                              If you’re not going far, take the bus or the train. It might take a little longer, but it will prevent a lot of air pollution.
                          </li>
                          <li>
                              Carpooling or car sharing is a great way of still having a vehicle to your disposal, while reducing the amount of cars in traffic on the road.
                          </li>
                          <li>
                              If you still need a car to your immediate disposal, try using fuel efficient vehicles and cleaner burning fuel.
                          </li>
                      </ol>

                  </div>
              </AnimateHeight>

          </div>

      </div>

    )//end of return

  }//end of render

}//end of class

export default ExpandCollapseTransit
