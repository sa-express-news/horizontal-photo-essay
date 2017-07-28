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
		let graph = null;

		let style = {
			fontStyle: this.props.italic ? 'italic' : 'normal'
		};

		if(this.props.isIntro){
			graph = <p className='Paragraph'><span className='dropCap'>{this.props.text.substring(0,1)}</span>{this.props.text.slice(1)}</p>;
		} else{
			graph = <p className='Paragraph' style={style}>{this.props.text}</p>
		}

		return(
			<div>
			{graph}
			</div>
		)
	}
}

export default Paragraph;