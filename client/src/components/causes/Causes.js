import React, { Component } from 'react';
import GlobalWarming from './GlobalWarming';
import CausesSection from './CausesSection';

class Causes extends Component {
    render() {
        return (
            <div>
                <GlobalWarming />
                <CausesSection />
            </div>
        );
    }
}

export default Causes;
