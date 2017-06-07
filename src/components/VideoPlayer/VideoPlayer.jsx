// @flow

import React, {Component} from 'react';

class VideoPlayer extends Component {
	props: {
		src: string,
		autoPlay: boolean,
		muted: boolean,
		loop: boolean,
		width: string
	};

	static defaultProps =  { 
		width: '100%'
	}

	render(){
		return(
			<video src={this.props.src} autoPlay={this.props.autoPlay} muted={this.props.muted} loop={this.props.loop} preload='auto' width={this.props.width} />		
		)
	}
}

export default VideoPlayer;