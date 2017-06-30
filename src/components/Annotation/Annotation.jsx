// @flow

import React, {Component} from 'react';

import './Annotation.css';

class Annotation extends Component {
	props: {
		text: string,
		annotation: string
	};

	state = {
		hide: true,
		touchStartX: 0,
		touchStartY: 0
	};

	toggleHideStatus = () =>{
		this.setState({hide: !this.state.hide});
	}

	handleTouchStart = (event: Event) =>{
		this.setState({
			touchStartX: event.changedTouches[0].screenX,
			touchStartY: event.changedTouches[0].screenY
		});
	}

	handleTouchEnd = (event: Event) =>{
		const horizontalDistanceTraveled = event.changedTouches[0].screenX - this.state.touchStartX;
		const verticalDistanceTraveled = event.changedTouches[0].screenY - this.state.touchStartY;

		if (horizontalDistanceTraveled > 50 && Math.abs(verticalDistanceTraveled) < 50){
			this.toggleHideStatus();
		}

	}
	render(){

		const textClass = this.state.hide ? 'Annotation-text' : 'Annotation-text-active';
		const annotationClass = this.state.hide ? 'Annotation-hide' : 'Annotation-show';

		return(
			<div className='AnnotationContainer'>
				<p><span className={textClass} onClick={this.toggleHideStatus}>{this.props.text}</span></p>
				<div className={annotationClass}>
					<span>{this.props.annotation}</span>
				</div>
			</div>

		)
	}
}

export default Annotation;


//<div className={annotationClass} onTouchStart={this.handleTouchStart} onTouchEnd={this.handleTouchEnd}>