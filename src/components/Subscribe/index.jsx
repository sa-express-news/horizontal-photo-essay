// @flow

import React, {Component} from 'react';
import LeftYellowBorder from '../LeftYellowBorder';
import Button from '../Button';

import './Subscribe.css';

class Subscribe extends Component {
	props: {
		link: string
	}; 
	render(){
		return(
			<div className='SubscribeContainer'>
			<LeftYellowBorder>
				<h4>Real Journalism | Real Insight</h4>
				<p>The Express-News brings you authoritative local stories. Subscribe today.</p>
				<Button link={this.props.link} text='Subscribe'/>
			</LeftYellowBorder>
			</div>
		)
	}
}

export default Subscribe;