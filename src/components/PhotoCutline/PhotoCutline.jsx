// @flow

import React, {Component} from 'react';

import './PhotoCutline.css';

class PhotoCutline extends Component {
	props:{
		text: string
	};

	render(){
		return(
			<p className='PhotoCutline'>{this.props.text}</p> 
		)
	}
}

export default PhotoCutline;