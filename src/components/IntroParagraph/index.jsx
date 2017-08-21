// @flow

import React, {Component} from 'react';

import './IntroParagraph.css';


class IntroParagraph extends Component {
	props: {
		text: string
	};

	render(){
		return(

				<p className='IntroParagraph'><span>{this.props.text.substring(0,1)}</span>{this.props.text.substring(1)}</p>
				
		)
	}
}

export default IntroParagraph;