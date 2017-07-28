// @flow

import React, {Component} from 'react';

import './IntroParagraph.css';


class IntroParagraph extends Component {
	props: {
		text: string
	};

	render(){
		const firstLetter = this.props.text.substring(0,1);
		return(

				<p className='IntroParagraph'>{this.props.text}</p>
				
		)
	}
}

export default IntroParagraph;