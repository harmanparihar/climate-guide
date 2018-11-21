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
                <p></p>
                <div className="container">
                <CarbonChart />
                <Co2Chart />
                <p>Updated from <a href="https://www.noaa.gov/">NOAA</a> at {new Date().toUTCString()}</p>
                </div>
            </section>
        );
    }
}

export default Causes;
