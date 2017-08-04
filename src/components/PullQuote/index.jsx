// @flow

import React, {Component} from 'react';

import LeftYellowBorder from '../LeftYellowBorder';

import './PullQuote.css';

class PullQuote extends Component {
	props: {
		quote: string,
		source: string
	};

	render(){
		return(
			<div className='PullQuoteContainer'>
				<LeftYellowBorder>
					<p className='PullQuote'>"{this.props.quote}"</p>
					<p className='PullQuoteAttribution'> - {this.props.source}</p>
				</LeftYellowBorder>
			</div>
		)
	}
}

export default PullQuote;