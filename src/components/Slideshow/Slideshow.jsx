
import React, {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

import SlideshowPhoto from '../SlideshowPhoto/SlideshowPhoto';

import './Slideshow.css';

class Slideshow extends Component {
	props: {
		photos: Array<Object>
	};

	state = {
		activeIndex : 0,
		loadedPhotos: [],
		touchStartX: null,
		touchStartY: null,
		lastChange: new Date()
	};

	constructor(){
		super();
	 	this.moveForward = this.moveForward.bind(this);
	 	this.moveBackward = this.moveBackward.bind(this);
	}

	loadPhoto = (path: string) =>{
		return require(`../../images/${path}`);
	}

	moveForward = () =>{
			let maxIndex = this.props.photos.length - 1;
			let currentIndex = this.state.activeIndex;

			let newIndex = currentIndex === maxIndex ? 0 : currentIndex + 1;

    		this.setState(prevState => ({
      			activeIndex: newIndex,
      			lastChange: new Date()
   			}));
	}

	moveBackward = () =>{
		let currentIndex = this.state.activeIndex;

		let newIndex = currentIndex === 0 ? this.props.photos.length -1 : currentIndex -1;

		this.setState(prevState => ({
      		activeIndex: newIndex,
      		lastChange: new Date()
   		}));
	}

	handleTouchStart = (event: Event) =>{

		const theTouch = event.touches[0];

		this.setState(prevState => ({
			touchStartX: theTouch.screenX,
			touchStartY: theTouch.screenY
		}));
	}

	handleTouchEnd = (event: Event) =>{
		const theTouch = event.changedTouches[0];

		if (this.state.touchStartX - theTouch.screenX >= 75){
			this.moveBackward();
		}

		if(theTouch.screenX - this.state.touchStartX >= 75){
			this.moveForward();
		}

	}

	shouldComponentUpdate = (nextProps, nextState) =>{
		const millisecondsSinceLastChange = new Date().getTime() - this.state.lastChange.getTime();

		if (millisecondsSinceLastChange < 400){
			return false;
		}

		return true;
	}

	render(){

		const slideshowPhotos = this.props.photos.map((photo, index)=>{
			return <SlideshowPhoto source={photo.source} caption={photo.caption} cutline={photo.cutline}
			moveForward={this.moveForward} moveBackward={this.moveBackward} 
			handleTouchStart={this.handleTouchStart} handleTouchEnd={this.handleTouchEnd} key={index}/>
		});

		return(
			<div className='Slideshow'>
			<CSSTransitionGroup
				transitionName='slideshow'
				transitionEnterTimeout={350}
				transitionLeave={false}>
				{slideshowPhotos[this.state.activeIndex]}
			</CSSTransitionGroup>
			<div className='Slideshow-load'>
				{this.props.photos.map((photo, index)=>{
					return <img src={photo.source} key={index} alt={photo.caption}/>
				})}
			</div>
			</div>
		)
	}
}

export default Slideshow;