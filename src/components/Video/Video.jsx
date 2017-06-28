// @flow

import React, {Component} from 'react';

import './Video.css';

class Video extends Component {
	props: {
		src: string,
		autoPlay: boolean,
		muted: boolean,
		loop: boolean,
		controls: boolean,
		height: number,
		width: number
	};

	static defaultProps =  { 
		height: 100,
		width: 100,
		controls: true
	};

	handleClick = (event) =>{
		let paused = event.target.paused;
		if (paused){
			event.target.play();			
		}
		else{
			event.target.pause();
		}
	}

	render(){

		return(
			<div className='VideoContainer'>
				<video src={this.props.src} onClick={this.handleClick} muted={this.props.muted} preload='auto' width='100%' controls={this.props.controls}> </video>		
			</div>
		)
	}
}

export default Video;