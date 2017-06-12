// @flow

import React, {Component} from 'react';

import Paragraph from '../Paragraph/Paragraph';
import FullPhotoContainer from '../FullPhotoContainer/FullPhotoContainer';
import FullPhoto from '../FullPhoto/FullPhoto';
import SmallPhotoDesktopContainer from '../SmallPhotoDesktopContainer/SmallPhotoDesktopContainer';
import SmallPhotoDesktop from '../SmallPhotoDesktop/SmallPhotoDesktop';
import PullQuote from '../PullQuote/PullQuote';

class Section extends Component {
	props: {
		data: any
	};

	loadPhoto = (path: string) =>{
		return require(`../../images/${path}`);
	}

	render(){
		const data = this.props.data;

		const components = data.map((object, index) =>{
			switch (object.type){
				case 'text':
					return <Paragraph text={object.value} key={index} />
				case 'photo':
					const photo = object.value;
					const photoPath = this.loadPhoto(photo.source);

					switch (photo.type){
						case 'full':
							let photoComponent = <FullPhoto src={photoPath} alt={photo.caption}/>;
							return <FullPhotoContainer caption={photo.caption} cutline={photo.cutline} key={index}>{photoComponent}</FullPhotoContainer>
						case 'small':
							let smallPhotoComponent = <SmallPhotoDesktop src={photoPath} alt={photo.caption}/>
							return <SmallPhotoDesktopContainer caption={photo.caption} cutline={photo.cutline} key={index}>{smallPhotoComponent}</SmallPhotoDesktopContainer>
						default:
							return null
					};

				case 'pullquote':
					return <PullQuote quote={object.value.quote} key={index}/>
				default:
					return null
			};
		});

		return(
			<div className='Section'>
				{components}
			</div>
		)
	}
}

export default Section;