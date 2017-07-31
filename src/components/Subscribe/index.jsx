// @flow

import React, {Component} from 'react';
import Button from '../Button';

import './Subscribe.css';

class Subscribe extends Component {
	render(){
		return(
			<div className='SubscribeContainer'>
				<h4>Real Journalism | Real Insight</h4>
				<p>The Express-News brings you authoritative local stories. Subscribe today.</p>
				<Button link='https://myaccount.expressnews.com/dssSubscribe.aspx?pid=889&z=00000' text='Subscribe'/>
			</div>
		)
	}
}

export default Subscribe;