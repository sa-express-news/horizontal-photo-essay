// @flow

import React, {Component} from 'react';

import './IntroParagraph.css';


class IntroParagraph extends Component {
	props: {
		text: string
	};

	render(){
		return(

				<p className='IntroParagraph'>{this.props.text}</p>
				
		)
	}
}

export default IntroParagraph;