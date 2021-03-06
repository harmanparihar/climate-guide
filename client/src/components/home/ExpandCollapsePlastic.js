import React from 'react';
import AnimateHeight from 'react-animate-height';
import bottle from '../assets/icons/bottle-purple.svg';

import Interactive from './Interactive';
import person from '../assets/icons/person.svg';
import battery from '../assets/icons/battery-half.svg';
import bottles from '../assets/icons/bottle-mountain.svg';
import carbon from '../assets/icons/carbon-pollution.svg';

class ExpandCollapsePlastic extends React.Component{

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

      <div id="plastic" className="expand-collapse-container container">

          <div className="container-head">

              <div className="heading">
                  <img src={bottle} alt='Causes' className="icon plastic-bottle" />

                  <h2>Plastic</h2>
                  <p className="font-weight-medium">Plastic Recyling Facts!</p>
              </div>

              <button className="btn" onClick={this.toggle}>
                  { height === 0 ? 'Expand' : 'Collapse' }
              </button>

          </div>

          <p>By recycling plastic waste and using a reusable mug and bottle, ONE person can prevent 340 pounds of carbon pollution a year, prevent the need for at least 100 plastic bottles, and reduce 50% of the energy it would take to burn it.</p>

          <div className="container-body">

              <AnimateHeight
                  duration={600}
                  height={height}
              >

                  <Interactive
                      className="tips-plastic"
                      src1={person}
                      src2={battery}
                      src3={bottles}
                      src4={carbon}
                  />

                  <div className="tips-container">

                      <p className="font-weight-medium">Tips! How you can make a difference</p>

                      <ol className="tips-list">
                          <li>
                              Use reusable bags for groceries. Most stores now charge for plastic bags, so it is worth buying a few fabric bags. When getting rid of your plastic bags, take them to your supermarket, most stores collect plastic bags for recycling.

                          </li>
                          <li>
                              Be sure to recycle any plastic containers you might have, such as shampoo bottles, detergent bottles, food boxed and so on.
                          </li>
                          <li>
                              Get a reusable water bottle. Below are some affordable options:

                              <ul className="shopping-list-container">

                                  <li>
                                      <a href="https://www.londondrugs.com/london-drugs-double-wall-bottle---stainless-steel---490ml/L6352835.html">Double Wall Bottle - Stainless Steel - 490ml</a>
                                  </li>
                                  <li>
                                      <a href="https://www.londondrugs.com/lab-o-glass-water-bottle-with-silicone-sleeve---assorted---500ml/L5520747.html">Glass Water Bottle with Silicone Sleeve</a>
                                  </li>
                                  <li>
                                      <a href="https://www.londondrugs.com/london-drugs-water-bottle-with-stainless-steel-lid---1000ml/L8899585.html">Water Bottle with Stainless Steel Lid - 1000ml</a>
                                  </li>

                              </ul>

                          </li>
                      </ol>

                  </div>
              </AnimateHeight>

          </div>

      </div>

    )//end of return

  }//end of render

}//end of class

export default ExpandCollapsePlastic
