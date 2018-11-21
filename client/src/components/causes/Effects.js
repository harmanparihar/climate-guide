import React, { Component } from 'react';
import { ReactComponent as Weather } from '../assets/icons/weather.svg';
import TempChart from './tempChart/TempChart';


class Effects extends Component {
    render() {
        return (
            <section>
                <Weather className='icon' ariaLabel='logo' />
            <h2>Effects</h2>
            <p></p>
            <div className="container">

            <TempChart />
            <p>Updated from <a href="https://www.nasa.gov/">NASA</a> at {new Date().toUTCString()}</p>
            </div>
            </section>
            );
    }
}

export default Effects;
