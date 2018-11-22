import React from 'react'
import AnimateHeight from 'react-animate-height'
import Plastic from '../assets/images/Plastic.png'
import PlasticBottle from '../assets/icons/bottle.svg'

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

      <div className="expand-collapse-container container">

          <div className="container-head">
                  <img src={PlasticBottle} alt='Causes' className="icon" />

            <h2>Plastic</h2>
            <p>Some crazy facts about plastic !!</p>
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
                Recycling one ton of plastic saves 5,774 kWh of <b>electricity</b>, 685 gallon of <b>oil</b>, 30 cubic yard of <b>landfil space</b> and enough energy to to heat an average home for six months.
              </p>

              <img src={Plastic} alt="plastic-image" />

              <div className="tips-container">

                <h3>Tips! How you can make a difference</h3>

                <ul className="tips-list">
                  <li>
                    <b>Twist on the Cap -</b> Recyclers want your plastic bottle and and container lids. Twist on the bottle caps before tossing in the bin to make it easier for recyclers.
                  </li>
                  <li>
                    <b>Recycle on the Go -</b> Seek out public recycling bins at sport stadiums, public parks and beaches. Can't find one? Stash your recyclables in a plastic bag and bring them back to your home bin. This will not only increase recycling,  but it can help cut down on litter, too.
                  </li>
                  <li>
                    <b>To the Store with Bag and Wraps -</b> Did you know more than 18,000 grocery and retail stores collect plastic grocery bags for recycling? Plus bags for dry-cleaning, bread, produce, newspaper - and even zipper bags.
                  </li>
                </ul>

              </div>
            </AnimateHeight>

          </div>

      </div>

    )//end of return

  }//end of render

}//end of class

export default ExpandCollapsePlastic
