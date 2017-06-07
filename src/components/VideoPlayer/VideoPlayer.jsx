// @flow

import React, {Component} from 'react';

class VideoPlayer extends Component {
	props: {
		src: string,
		autoPlay: boolean,
		muted: boolean,
		loop: boolean,
		height?: number,
		width?: number
	};

	static defaultProps =  { 
		height: 100,
		width: 100
	}

	render(){
		const containerStyle = {
			height: `${this.props.height}%`,
			width: `${this.props.width}%`
		};

		return(
			<div className='videoContainer' style={containerStyle}>
			<video src={this.props.src} autoPlay={this.props.autoPlay} muted={this.props.muted} loop={this.props.loop} preload='auto' width='100%'/>		
			</div>
		)
	}
}

export default VideoPlayer;