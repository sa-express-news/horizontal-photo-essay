// @flow

import React, {Component} from 'react';
import Button from '../Button/Button';

import './Subscribe.css';

class Subscribe extends Component {
	render(){
		return(
			<div className='SubscribeContainer'>
				<h4>Support quality journalism.</h4>
				<p>The Express-News strives to bring you thoughtful local stories every day.</p>
				<Button link='https://myaccount.expressnews.com/dssSubscribe.aspx?pid=889&z=00000' text='Subscribe'/>
			</div>
		)
	}
}

export default Subscribe;