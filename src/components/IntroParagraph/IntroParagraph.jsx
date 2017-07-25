// @flow

import React, {Component} from 'react';
import Paragraph from '../Paragraph';

class IntroParagraph extends Component {
	props: {
		text: string,
		isIntro: boolean
	};

	static defaultProps =  { 
		isIntro: true
	};

	render(){
		return(
			<Paragraph isIntro={this.props.isIntro} text={this.props.text} />
		)
	}
}

export default IntroParagraph;