// @flow

import React, {Component} from 'react';

import PhotoInfo from '../PhotoInfo/PhotoInfo';

import './SmallPhotoDesktopContainerReverse.css';

class SmallPhotoDesktopContainerReverse extends Component {
	props: {
		children: any,
		caption: string,
		cutline: string
	};

	render(){

		return(
			<div className='SmallPhotoDesktopContainerReverse'>
				{this.props.children}
				<PhotoInfo caption={this.props.caption} cutline={this.props.cutline}/>
			</div>
		)
	}
}

export default SmallPhotoDesktopContainerReverse;