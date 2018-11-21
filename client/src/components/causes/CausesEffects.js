import React, { Component } from 'react';
import GlobalWarming from './GlobalWarming';
import Causes from './Causes';
import Effects from './Effects';
import Header from '../Header';

class CausesEffects extends Component {
	render() {
		return (
			<div className="fixed-header">
			<Header/>
			<div className="causes-effects causes wrapper">
			<GlobalWarming />
			<Causes />
			<Effects />
			</div>
			</div>
			);
		}
	}

	export default CausesEffects;
