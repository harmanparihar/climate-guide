import React, { Component } from 'react';
import weather from '../assets/icons/weather.svg';
import TempChart from './tempChart/TempChart';


class Effects extends Component {
    render() {
        return (
            <section>
                <img src={weather} alt='Effects' />
                <h2>Effects</h2>
                <p></p>
                <TempChart />
            </section>
        );
    }
}

export default Effects;
