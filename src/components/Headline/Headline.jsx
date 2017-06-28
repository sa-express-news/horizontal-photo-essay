// @flow

import React, {Component} from 'react';

import './Headline.css';

class Headline extends Component {
	props: {
		text: string
	};

	render(){
		return(
			<h2 className='Headline'>{this.props.text}</h2>
		)
	}
}

export default Headline;
