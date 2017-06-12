// @flow

import React, {Component} from 'react';

import './PullQuote.css';

class PullQuote extends Component {
	props: {
		quote: string
	};

	render(){
		return(
			<div className='PullQuoteContainer'>
				<p className='PullQuote'>"{this.props.quote}"</p>
			</div>
		)
	}
}

export default PullQuote;