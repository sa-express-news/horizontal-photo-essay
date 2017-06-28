// @flow

import React, {Component} from 'react';

import './Paragraph.css';

class Paragraph extends Component {
	props: {
		text: string,
		isIntro: boolean,
		italic: boolean
	};

	static defaultProps =  { 
		isIntro: false,
		italic: false
	};

	render(){
		let graph = null;
		let italic = this.props.italic

		let style = {
			fontStyle: 'normal'
		};

		if(italic){
			style= {
				fontStyle: 'italic'
			};
		}

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