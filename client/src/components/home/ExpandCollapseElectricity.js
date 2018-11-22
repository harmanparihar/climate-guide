import React from 'react'
import AnimateHeight from 'react-animate-height'
import Electric from '../assets/images/Electric.png'
import Electricity from '../assets/icons/electricity.svg'

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
              <img src={Electricity} alt='Causes' className="icon" />

              <h2>Electricity</h2>
              <h3>Energy Conservation Facts!</h3>
            </div>

            <button className="btn" onClick={this.toggle}>
              { height === 0 ? 'Expand' : 'Collapse' }
            </button>

          </div>

          <div className="container-body">

            <AnimateHeight
              duration={600}
              height={height}
            >
              <p>
                By reducing 30% of average electric use, ONE person can prevent over 2 TONS of pollution a year, as well as save between $600 - $2000.
              </p>

              <img src={Electric} alt="elctric-image" />

              <div className="tips-container">

                <h3>Tips! How you can make a difference</h3>

                <ol className="tips-list">
                  <li>
                    Turn off unused appliances and unused light sources. This will save money and indoor pollution.
                  </li>
                  <li>
                    Use energy smart appliances and lightbulbs, they run more efficiently and cleanly.
                  </li>
                  <li>
                    If you have electric heat, lower your thermostat by two degrees to save 5% on your heating bill. Lowering it to five degrees could save 10%. This will help you save $120.
                  </li>
                </ol>

              </div>
            </AnimateHeight>

          </div>

      </div>

    )//end of return

  }//end of render

}//end of class

export default ExpandCollapseElectricity
