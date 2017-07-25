// @flow

import React, {Component} from 'react';

import LeftYellowBorder from '../LeftYellowBorder';

import './PullQuote.css';

class PullQuote extends Component {
	props: {
		quote: string
	};

	render(){
		return(
			<div className='PullQuoteContainer'>
				<LeftYellowBorder>
					<p className='PullQuote'>"{this.props.quote}"</p>
					<p className='PullQuoteAttribution'> - Jim Jones, a creepy cult guy from Alabama or some such other state</p>
				</LeftYellowBorder>
			</div>
		)
	}
}

export default PullQuote;