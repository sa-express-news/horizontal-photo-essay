// @flow

import React, {Component} from 'react';

import PhotoInfo from '../PhotoInfo';

import './FullPhotoContainer.css';

class PhotoContainer extends Component {
	props: {
		children: any,
		caption: string,
		cutline: string
	};

	render(){

		return(
			<div className='FullPhotoContainer'>
				{this.props.children}
				<PhotoInfo caption={this.props.caption} cutline={this.props.cutline}/>
			</div>
		)
	}
}

export default PhotoContainer;