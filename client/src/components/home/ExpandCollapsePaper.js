import React from 'react';
import AnimateHeight from 'react-animate-height';
import Paper from '../assets/images/Paper.png';
import PaperPlane from '../assets/icons/paper-plane.svg';

class ExpandCollapsePaper extends React.Component{

  state = {
    height: 0
  }

  toggle = () => {
    const { height } = this.state;

    this.setState({
      height: height === 0 ? 'auto' : 0
    })
  }

  render() {

    const { height } = this.state;

    return(

      <div className="expand-collapse-container container">

          <div className="container-head">
                  <img src={PaperPlane} alt='Causes' className="icon" />

            <h2>Paper</h2>
            <p>Some crazy facts about paper !!</p>
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
                Recycling one ton of officer papers save 17 <b>trees</b>, 7,000 gallon of <b>water</b>, 463 gallon <b>oil</b>, 3 cubic yard of <b>landfil space</b> and enough energy to to heat an average home for six months.
              </p>

              <img src={Paper} alt="paper-image" />

              <div className="tips-container">

                <h3>Tips! How you can make a difference</h3>

                <ul className="tips-list">
                  <li>
                    <b>Coffee Mugs and Water Bottle -</b> Get a reusable coffee mug and water bottle. If possible purchase recyclable coffee mugs when you go next time in your favourite coffee shop.
                  </li>
                  <li>
                    <b>Digital Options -</b> Whenever it's possible, go for the digital option. If you can get a receipt or document by email, choose that option.
                  </li>
                  <li>
                    <b>Prevent Contamination -</b> To prevent contamination of the paper recycling bins, avoid placing any paper that have food leftovers or laminated coating.
                  </li>
                </ul>

              </div>
            </AnimateHeight>

          </div>

      </div>

    )//end of return

  }//end of render

}//end of class

export default ExpandCollapsePaper
