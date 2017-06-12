// @flow

import React, {Component} from 'react';

import PhotoCaption from '../PhotoCaption/PhotoCaption';
import PhotoCutline from '../PhotoCutline/PhotoCutline';

import './PhotoInfo.css';

class PhotoInfo extends Component {
	props: {
		caption: string,
		cutline: string
	};

	render(){
		return(
			<div className='PhotoInfo'>
				<PhotoCaption text={this.props.caption}/>
				<PhotoCutline text={this.props.cutline}/>
			</div>
		)
	}

}

export default PhotoInfo;