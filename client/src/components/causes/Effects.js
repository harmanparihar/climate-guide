import React, { Component } from 'react';
import { ReactComponent as Weather } from '../assets/icons/weather.svg';
import TempChart from './tempChart/TempChart';


class Effects extends Component {
    render() {
        return (
            <section>
                <Weather className='icon' ariaLabel='logo' />
                <h2>Effects</h2>
                <p><span className="font-weight-medium">Global Surface Temperature</span> depicts the most significant effect on our planet resulted from the above factors: the increase of heat on the surface of the world. This means an elevation of heat waves and forest fires in already warm climate areas, and floods and melting ice in colder areas.</p>
                <p>Annual mean follows the average global anomalies in temperature. Lowess smoothing means averaging the average, so that a simpler trending line can be calculated.</p>

                <div className="container">
                    <TempChart />
                    <p className="caption">Updated from <a href="https://www.nasa.gov/">NASA</a> at {new Date().toUTCString()}</p>
                </div>
            </section>
            );
    }
}

export default Effects;
