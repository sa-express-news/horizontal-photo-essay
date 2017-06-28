// @flow

import React, {Component} from 'react';

import './SectionHeading.css';

class SectionHeading extends Component {
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
			graph = <p className='SectionHeading'><span className='dropCap'>{this.props.text.substring(0,1)}</span>{this.props.text.slice(1)}</p>;
		} else{
			graph = <p className='SectionHeading'>{this.props.text}</p>
		}

		return(
			<div>
			{graph}
			</div>
		)
	}
}

export default SectionHeading;