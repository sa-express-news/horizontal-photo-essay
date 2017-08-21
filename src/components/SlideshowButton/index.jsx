// @flow

import React, {Component} from 'react';

import './SlideshowButton.css';

class SlideshowButton extends Component {
	props: {
		right: boolean,
		onClick: Function
	};
	render(){
		const arrow = this.props.right ? '>' : '<';
		const className = `SlideshowButton-container ${this.props.right ? 'right' : 'left'}`;
		return(
			<div className={className}>
			<div className='SlideshowButton' onClick={this.props.onClick}>{arrow}</div>
			</div>
		)
	}
}

export default SlideshowButton;