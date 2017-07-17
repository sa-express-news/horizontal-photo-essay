// @flow

import React, {Component} from 'react';

import FullPhotoContainer from '../FullPhotoContainer/FullPhotoContainer';
import FullPhoto from '../FullPhoto/FullPhoto';

class Photos extends Component{
	props: {
		photos: Array<any>
	};

	loadPhoto = (path: string) =>{
		return require(`../../images/${path}`);
	}

	render(){
		const components = this.props.photos.map((photo: Object, key: number)=>{
			const photoPath = this.loadPhoto(photo.source);
			let photoComponent = <FullPhoto src={photoPath} alt={photo.caption}/>;

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