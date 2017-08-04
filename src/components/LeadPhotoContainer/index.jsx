// @flow

import React, {Component} from 'react';

import LeadPhoto from '../LeadPhoto';
import PhotoInfo from '../PhotoInfo';

import './LeadPhotoContainer.css';

class LeadPhotoContainer extends Component {
	props: {
		data: Object
	};

	render(){
		return(
			<div className='LeadPhotoContainer'>
				<LeadPhoto src={this.props.data.source} alt={this.props.data.caption} />
				<PhotoInfo caption={this.props.data.caption} cutline={this.props.data.cutline}/>
			</div>
		)
	}
}

export default LeadPhotoContainer;