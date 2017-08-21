// @flow

import React, {Component} from 'react';

import PhotoInfo from '../PhotoInfo';

import './SmallPhotoDesktopContainer.css';

class SmallPhotoDesktopContainer extends Component {
	props: {
		children: any,
		caption: string,
		cutline: string
	};

	render(){

		return(
			<div className='SmallPhotoDesktopContainer'>
				{this.props.children}
				<PhotoInfo caption={this.props.caption} cutline={this.props.cutline}/>
			</div>
		)
	}
}

export default SmallPhotoDesktopContainer;