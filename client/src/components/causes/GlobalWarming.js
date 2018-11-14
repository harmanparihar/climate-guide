import React, { Component } from 'react';
import TempChart from './tempChart/TempChart';

class GlobalWarming extends Component {
    render() {
        return (
            <section>
                <h2>Global Warming</h2>
                <p>Climate change is a big and important topic nowadays, but somehow it doesn’t receive the much deserved attention. In particular, global warming (these 2 terms are interchangeable but slightly different) is a real and serious issue that has become more intense and frequent in these last decades.</p>
                <TempChart className='causes-effects-chart' />
            </section>
        );
    }
}

export default GlobalWarming;
