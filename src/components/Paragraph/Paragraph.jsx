// @flow

import React, {Component} from 'react';

import './Paragraph.css';

class Paragraph extends Component {
	props: {
		text: string,
		isIntro: boolean
	};

	static defaultProps =  { 
		isIntro: false
	};

	render(){
		let graph = null;

		if(this.props.isIntro){
			graph = <p className='Paragraph'><span className='dropCap'>{this.props.text.substring(0,1)}</span>{this.props.text.slice(1)}</p>;
		} else{
			graph = <p className='Paragraph'>{this.props.text}</p>
		}

		return(
			<div>
			{graph}
			</div>
		)
	}
}

export default Paragraph;