import React from 'react';
import AnimateHeight from 'react-animate-height';
import PaperInteractive from './PaperInteractive';
// import paper from '../assets/images/paper.png';
import paperPlane from '../assets/icons/paper-plane.svg';

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

              <div className="heading">
                  <img src={paperPlane} alt='Causes' className="icon" />

                  <h2>Paper</h2>
                  <h3>Paper Recycling Facts!</h3>

              </div>

              <button className="btn" onClick={this.toggle}>
                  { height === 0 ? 'Expand' : 'Collapse' }
              </button>

          </div>
          <p>
              Recycling one ton of office paper, will save 17 trees, 7000 gallons of water and prevent 60 pounds of pollution.
          </p>
          <div className="container-body">

              <AnimateHeight
                  duration={600}
                  height={height}
              >


                  {/* <img src={paper} alt="Paper Tips" /> */}
                  <PaperInteractive />

                  <div className="tips-container">

                      <h3>Tips! How you can make a difference</h3>

                      <ol className="tips-list">
                          <li>
                              Prepare a container for all your paper waste (unheeded documents, cardboard boxes and such). It will make it easier to throw away into the paper recycling bin.
                          </li>
                          <li>
                              To reduce paper cups use – get a reusable mug and water bottle. Below are some affordable and easy to find products of decent quality:

                              <ul className="shopping-list-container">

                                  <li>
                                      <a href="https://www.londondrugs.com/thermocafe-travel-mug---470ml/L7857121.html?cgid=brand-thermos-hydration">ThermoCafe Travel Mug</a>
                                  </li>
                                  <li>
                                      <a href="https://www.londondrugs.com/thermos-vacuum-insulated-bottle---stainless-steel---500ml/L8781056.html?cgid=brand-thermos-hydration">Thermos Vacuum Insulated Bottle - Stainless Steel - 500ml</a>
                                  </li>
                                  <li>
                                      <a href="https://www.londondrugs.com/london-drugs-double-wall-bottle---stainless-steel---490ml/L6352835.html">Double Wall Bottle - Stainless Steel - 490ml</a>
                                  </li>
                                  <li>
                                      <a href="https://www.londondrugs.com/lab-o-glass-water-bottle-with-silicone-sleeve---assorted---500ml/L5520747.html">Glass Water Bottle with Silicone Sleeve</a>
                                  </li>

                              </ul>

                          </li>
                          <li>
                              Whenever it is possible, go for the digital option. Many services offer a digital form of receipts and documents
                          </li>
                      </ol>

      </div>
      </AnimateHeight>

      </div>

      </div>

    )//end of return

  }//end of render

}//end of class

export default ExpandCollapsePaper
