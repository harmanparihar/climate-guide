import React from 'react'
import AnimateHeight from 'react-animate-height'
import Transit from '../assets/images/Transit.png'
import CarSmoke from '../assets/icons/transit-colour.svg'

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
              <img src={CarSmoke} alt='Causes' className="icon" />

              <h2>Transit</h2>
              <h3>Transit Facts!</h3>
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
                By taking the bus to work for a year, ONE person, can prevent 4800 pounds of pollution (That’s over 2 TONS!), and saves an average of $6200.
              </p>

              <img src={Transit} alt="transit-image" />

              <div className="tips-container">

                <h3>Tips! How you can make a difference</h3>

                <ol className="tips-list">
                  <li>
                    If you’re not going far, take the bus or the train. It might take a little longer, but it will prevent a lot of air pollution.
                  </li>
                  <li>
                    Car share is a great way of still having a vehicle to your disposal, while reducing the amount of cars in use on the road.
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
