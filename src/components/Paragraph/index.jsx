// @flow

import React, {Component} from 'react';

import './Paragraph.css';

class Paragraph extends Component {
	props: {
		text: string,
		italic: boolean
	};

	static defaultProps =  {
		italic: false
	};

	render(){

		let style = {
			fontStyle: this.props.italic ? 'italic' : 'normal'
		};

		return(
			<p className='Paragraph' style={style}>{this.props.text}</p>
		)
	}
}

export default Paragraph;