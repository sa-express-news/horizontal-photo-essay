// @flow

import React, {Component} from 'react';

import './LeadPhoto.css';

class LeadPhoto extends Component {
	props: {
		src: string,
		alt: string,
	};

	render(){
		return(
				<img className='LeadPhoto' src={this.props.src} width='100%' alt={this.props.alt}/>
		)
	}
}

export default LeadPhoto;