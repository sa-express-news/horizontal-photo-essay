// @flow

import React, {Component} from 'react';

import './ResponsiveiFrame.css';

class ResponsiveiFrame extends Component {
	props: {
		src: string,
	};

	render(){
		return(
			<div className='iFrameContainer'>
				<iframe src={this.props.src} frameBorder="0" allowFullScreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"/>		
			</div>
		)
	}
}

export default ResponsiveiFrame;