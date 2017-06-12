// @flow

import React, {Component} from 'react';

import './SmallPhotoDesktop.css';

class SmallPhotoDesktop extends Component {
	props: {
		src: string,
		alt: string,
	};

	render(){
		return(
			<img className='SmallPhotoDesktop' src={this.props.src} width='100%' alt={this.props.alt}/>
		)
	}
}

export default SmallPhotoDesktop;