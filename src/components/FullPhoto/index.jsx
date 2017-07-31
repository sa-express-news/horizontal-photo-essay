// @flow

import React, {Component} from 'react';

import './FullPhoto.css';

class FullPhoto extends Component {
	props: {
		src: string,
		alt: string,
	};

	render(){
		return(
			<img className='FullPhoto' src={this.props.src} width='100%' alt={this.props.alt}/>
		)
	}
}

export default FullPhoto;