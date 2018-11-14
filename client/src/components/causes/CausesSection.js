import React, { Component } from 'react';
import weather from '../assets/icons/weather.svg';
import CarbonChart from './carbonChart/CarbonChart';
import Co2Chart from './co2Chart/Co2Chart';

class CausesSection extends Component {
    render() {
        return (
            <section>
                <img src={weather} alt='Causes' />
                <h2>Causes</h2>
                <p></p>
                <CarbonChart />
                <Co2Chart />
            </section>
        );
    }
}

export default CausesSection;
