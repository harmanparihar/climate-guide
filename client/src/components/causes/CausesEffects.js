import React, { Component } from 'react';
import GlobalWarming from './GlobalWarming';
import Causes from './Causes';
import Effects from './Effects';

class CausesEffects extends Component {
    render() {
        return (
            <div className="causes-effects causes wrapper container">
                <GlobalWarming />
                <Causes />
                <Effects />
            </div>
        );
    }
}

export default CausesEffects;
