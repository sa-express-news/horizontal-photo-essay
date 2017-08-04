// @flow

import React, {Component} from 'react';

import FullPhotoContainer from '../FullPhotoContainer';
import FullPhoto from '../FullPhoto';

class Photos extends Component{
	props: {
		photos: Array<any>
	};

	render(){
		const components = this.props.photos.map((photo: Object, key: number)=>{
			let photoComponent = <FullPhoto src={photo.source} alt={photo.caption}/>;

			return <FullPhotoContainer caption={photo.caption} cutline={photo.cutline} key={key}>{photoComponent}</FullPhotoContainer>
		});

		return(
			<div className='Photos'>
				{components}
			</div>
		)
	}
}

export default Photos;