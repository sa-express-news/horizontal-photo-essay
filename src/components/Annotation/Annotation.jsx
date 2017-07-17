// @flow

import React, {Component} from 'react';

import './Annotation.css';

class Annotation extends Component {
	props: {
		text: string,
		annotation: string
	};

	state = {
		hide: true
	};

	toggleHideStatus = () =>{
		this.setState({hide: !this.state.hide});
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