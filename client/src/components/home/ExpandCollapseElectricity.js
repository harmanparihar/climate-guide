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
                  <img src={Electricity} alt='Causes' className="icon" />

            <h2>Electricity</h2>
            <p>Some crazy facts about electricity !!</p>
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
                If everyone just <b>trade in incandescent</b> light bulb for <b>an efficient CFL,</b> the reduction in pollution would be equivalent to taking <b>1.3 million cars</b> off the road. Improve your home or building's efficiency. Participating in LiveSmart BC grant program will reduce energy use by approximately 30%, providing finacial <b>savings of $600</b> on a <b>$2000 annual heating bill.</b>
              </p>

              <img src={Electric} alt="elctric-image" />

              <div className="tips-container">

                <h3>Tips! How you can make a difference</h3>

                <ul className="tips-list">
                  <li>
                    <b>Turn Off Unnecessary Lights -</b> Two 100-watt incandescent bulbs swicthed off an extra two hours per day could save you $15 over a year. Better yet, switched to LED.
                  </li>
                  <li>
                    <b>Use Natural Lights -</b> A single south-facing window can illumante 20 to 100 times its area. Turning off one 60-watt bulb for hours a day is $9 saving over a year.
                  </li>
                  <li>
                    <b>Manage Your Thermostat -</b> If you have electric heat, lower your thermostat by two degrees to save 5% on your heating bill. Lowering it to five degrees could save 10%. This will help you save $120.
                  </li>
                </ul>

              </div>
            </AnimateHeight>

          </div>

      </div>

    )//end of return

  }//end of render

}//end of class

export default ExpandCollapseElectricity
