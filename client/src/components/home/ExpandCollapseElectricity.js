import React from 'react';
import AnimateHeight from 'react-animate-height';
import electricity from '../assets/icons/energy-colour.svg';
import lamp from '../assets/icons/lamp_eletricity.svg';
import ton from '../assets/icons/ton-electricity.svg';
import money from '../assets/icons/money-electricity.svg';

import Interactive from './Interactive';

class ExpandCollapseElectricity extends React.Component{

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
                      <img src={electricity} alt='Electricity' className="icon" />

                      <h2>Electricity</h2>
                      <p className="font-weight-medium">Energy Conservation Facts!</p>
                  </div>

                  <button className="btn" onClick={this.toggle}>
                      { height === 0 ? 'Expand' : 'Collapse' }
                  </button>

              </div>

              <p>By reducing 30% of average use of electricity, ONE person can prevent over 2 tons of CO2 pollution a year, as well as save between US$600 - US$2000.</p>

              <div className="container-body">

                  <AnimateHeight
                      duration={600}
                      height={height}
                  >

                      <Interactive
                          className="tips-eletricity"
                          src1={lamp}
                          src2={ton}
                          src3={money}
                      />

                      <div className="tips-container">

                          <p className="font-weight-medium">Tips! How you can make a difference</p>

                          <ol className="tips-list">
                              <li>
                                  Turn off unused appliances and unused light sources. This will save money and indoor pollution.
                              </li>
                              <li>
                                  Use energy smart appliances and lightbulbs, they run more efficiently and cleanly.
                              </li>
                              <li>
                                  If you have electric heat, lower your thermostat by two degrees to save 5% on your heating bill. Lowering it to five degrees could save 10%. This will help you save in total $120.
                              </li>
                          </ol>

                      </div>
                  </AnimateHeight>

          </div>

      </div>

    )//end of return

  }//end of render

}//end of class

export default ExpandCollapseElectricity;
