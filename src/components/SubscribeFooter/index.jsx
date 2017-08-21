// @flow

import React, {Component} from 'react';
import Button from '../Button';

import './SubscribeFooter.css';

class SubscribeFooter extends Component {
	props: {
		link: string
	};

	render(){
		return(
			<div className='SubscribeFooter'>
			<div>
				<h4>Real Journalism | Real Insight</h4>
				<p>The Express-News brings you authoritative local stories. Subscribe today.</p>
				<Button link={this.props.link} text='Subscribe'/>
			</div>
			</div>
		)
	}
}

export default SubscribeFooter;