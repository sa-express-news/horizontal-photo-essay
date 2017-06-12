// @flow

import React, {Component} from 'react';

import './PhotoCaption.css';

class PhotoCaption extends Component {
	props:{
		text: string
	};

	render(){
		return(
			<p className='PhotoCaption'>{this.props.text}</p> 
		)
	}
}

export default PhotoCaption;