// @flow

import React, { Component } from 'react';

import './StorySeriesBlock.css';

class StorySeriesBlock extends Component{
	props: {
		text: string
	};

	render(){
		if(!this.props.text){
			return null;
		}
		return(
			<div className='StorySeriesBlock'>
				<p>{this.props.text.toUpperCase()}</p>
			</div>
		)
	}
}

export default StorySeriesBlock;