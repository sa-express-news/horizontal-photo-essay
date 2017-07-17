// @flow

import React, {Component} from 'react';

import PhotoInfo from '../PhotoInfo/PhotoInfo';
import SlideshowButton from '../SlideshowButton/SlideshowButton';

import './SlideshowPhoto.css';

class SlideshowPhoto extends Component {
	props: {
		source: string,
		caption: string,
		cutline: string,
		moveForward: Function,
		moveBackward: Function,
		handleTouchStart: Function,
		handleTouchEnd: Function
	};

	loadPhoto = (path: string) =>{
		return require(`../../images/${path}`);
	}

	render(){
		return(
			<div className='SlideshowPhotoContainer'>
				<img className='SlideshowPhoto' src={this.props.source} width='100%' 
				alt={this.props.caption} onTouchStart={this.props.handleTouchStart} onTouchEnd={this.props.handleTouchEnd}/>
				<PhotoInfo caption={this.props.caption} cutline={this.props.cutline}/>
				<SlideshowButton right={false} onClick={this.props.moveBackward}/>
				<SlideshowButton right={true} onClick={this.props.moveForward}/>
			</div>
		)
	}
}

export default SlideshowPhoto;