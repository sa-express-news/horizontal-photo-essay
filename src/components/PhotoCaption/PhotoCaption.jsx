// @flow

import React, {Component} from 'react';

import './PhotoCaption.css';

class PhotoCaption extends Component {
	props:{
		text: string
	};

	render(){
		return(
			<span className='PhotoCaption'>{this.props.text}</span> 
		)
	}
}

export default PhotoCaption;