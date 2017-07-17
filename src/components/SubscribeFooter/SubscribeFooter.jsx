// @flow

import React, {Component} from 'react';
import Button from '../Button/Button';

import './SubscribeFooter.css';

class SubscribeFooter extends Component {
	render(){
		return(
			<div className='SubscribeFooter'>
			<div>
				<h4>Support the Express-News.</h4>
				<p>Get access to quality journalism every day.</p>
				<Button link='https://myaccount.expressnews.com/dssSubscribe.aspx?pid=889&z=00000' text='Subscribe'/>
			</div>
			</div>
		)
	}
}

export default SubscribeFooter;