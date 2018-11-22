import React from 'react'
import AnimateHeight from 'react-animate-height'
import Transit from '../assets/images/Transit.png'
import CarSmoke from '../assets/icons/car-smoke.svg'

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
                  <img src={CarSmoke} alt='Causes' className="icon" />

            <h2>Transit</h2>
            <p>Some crazy facts about transit !!</p>
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
                A bus with as few as <b>seven passengers</b> is more fuel-efficient than the average <b>single-occupant auto</b> used for coming. <b>Public transit</b> moves people efficiently while producing signifiantly <b>less air pollution</b> to move one passenger one mile -- compared to moving a person one mile in a <b>single-occupant auto.</b>
              </p>

              <img src={Transit} alt="transit-image" />

              <div className="tips-container">

                <h3>Tips! How you can make a difference</h3>

                <ul className="tips-list">
                  <li>
                    <b>Improve Air Quality -</b> Public transpotation can help metropolitan areas to meet national air quality standards by reducing overall vehicle emmision and the pollutants that create smog.
                  </li>
                  <li>
                    <b>Reduce Greenhouse Gas Emmision -</b> By moving more poeple with fewer vehicles, public transpotation can reduce greenhouse gas emmision. National averages demonstrate that public transpotation produces signifiantly lower greenhouse gas emmision per passenger mile than private vehicle.
                  </li>
                  <li>
                    <b>Save Energy -</b> Sharing rides through public transpotation can save fuel. It also decreases the need for constructing more transpotation infrastructure, manufracturing new vehicles and extracting more fossil fuels, meaning further energy savings and fewer environment impacts.
                  </li>
                </ul>

              </div>
            </AnimateHeight>

          </div>

      </div>

    )//end of return

  }//end of render

}//end of class

export default ExpandCollapseTransit
