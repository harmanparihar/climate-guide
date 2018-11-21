import React, { Component } from 'react';
import { ReactComponent as Factory } from '../assets/icons/factory.svg';
import CarbonChart from './carbonChart/CarbonChart';
import Co2Chart from './co2Chart/Co2Chart';

class Causes extends Component {
    render() {
        return (
            <section>
                <Factory className='icon' ariaLabel='logo' />

                <h2>Causes</h2>
                <p><span className="font-weight-medium">Global Carbon Emissions</span> depicts the major sources for the creation of carbon pollution. The upper line, which shows the highest levels of carbon production, is following pollution created by human use of fuel. The time line is comparing levels from the 1980s to 2016.</p>
                <div className="container">
                    <CarbonChart />
                    <p className="caption">Updated from <a href="https://www.icos-cp.eu/">ICOS Carbon Portal</a> at {new Date().toUTCString()}</p>
                </div>
                <p><span className="font-weight-medium">Carbon Dioxide (CO2) Emissions</span> is depicting global pollution by CO2 emissions, which have been steadily growing over the past 50 years.</p>
                <div className="container">
                    <Co2Chart />
                    <p className="caption">Updated from <a href="https://www.noaa.gov/">NOAA</a> at {new Date().toUTCString()}</p>
                </div>
            </section>
        );
    }
}

export default Causes;
