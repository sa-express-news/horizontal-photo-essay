// @flow

import React, {Component} from 'react';

import LeadPhotoContainer from '../LeadPhotoContainer';
import StoryMeta from '../StoryMeta';

import './StoryTop.css';

class StoryTop extends Component {
	props:{
		data: Object
	};

	render(){
		return(
			<div className='StoryTop'>
				<LeadPhotoContainer data={this.props.data.image} />
				<StoryMeta meta={this.props.data.meta}/> 
			</div>
		)
	}
}

export default StoryTop;