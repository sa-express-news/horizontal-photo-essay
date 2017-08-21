// @flow

import React, {Component} from 'react';

import './PhotoCutline.css';

class PhotoCutline extends Component {
	props:{
		text: string
	};

	render(){
		return(
			<span className='PhotoCutline'>({this.props.text})</span> 
		)
	}
}

export default PhotoCutline;