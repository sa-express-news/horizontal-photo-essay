// @flow

import React, {Component} from 'react';

import './Subhead.css';

class Subhead extends Component {
	props: {
		text: string
	};

	render(){
		return(
			<h3 className='subhead'>{this.props.text}</h3>
		)
	}
}

export default Subhead;
