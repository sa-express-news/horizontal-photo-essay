// @flow

import React from 'react';

import Paragraph from '../Paragraph';
import IntroParagraph from '../IntroParagraph';
import SectionHeading from '../SectionHeading';
import FullPhoto from '../FullPhoto';
import FullPhotoContainer from '../FullPhotoContainer';
import SmallPhotoDesktop from '../SmallPhotoDesktop';
import SmallPhotoDesktopContainer from '../SmallPhotoDesktopContainer';
import SmallPhotoDesktopContainerReverse from '../SmallPhotoDesktopContainerReverse';
import Photos from '../Photos';
import Slideshow from '../Slideshow';
import Subscribe from '../Subscribe';
import PhotoEssayContainer from '../PhotoEssayContainer';
import Annotation from '../Annotation';
import Annotations from '../Annotations';
import PullQuote from '../PullQuote'; 
import RelatedContent from '../RelatedContent';
import ResponsiveiFrame from '../ResponsiveiFrame';
import Video from '../Video';
import Credits from '../Credits';

const loadPhoto = (path: string) => {
	return require(`${path}`);
};

export default{
	text: (object: Object, key: number) => <Paragraph text={object.value} key={key}/>,

	intrograph: (object: Object, key: number) => <IntroParagraph text={object.value.text} key={key}/>,

	credits: (object: Object, key: number) => <Credits credits={object.value} key={key}/>,

	sectionheading: (object: Object, key: number) => <SectionHeading text={object.value} key={key}/>,

	photo: function(object: Object, key: number){
		const photo = object.value;
		const photoPath = photo.source;
		switch (photo.type){
			
			case 'full': 
			let photoComponent = <FullPhoto src={photoPath} alt={photo.caption}/>;
			return <FullPhotoContainer caption={photo.caption} cutline={photo.cutline} key={key}>{photoComponent}</FullPhotoContainer>
			
			case 'small-left':
			let smallPhotoComponent = <SmallPhotoDesktop src={photoPath} alt={photo.caption}/>
			return <SmallPhotoDesktopContainer caption={photo.caption} cutline={photo.cutline} key={key}>{smallPhotoComponent}</SmallPhotoDesktopContainer>
			
			case 'small-right':
			let smallPhotoComponentReverse = <SmallPhotoDesktop src={photoPath} alt={photo.caption}/>
			return <SmallPhotoDesktopContainerReverse caption={photo.caption} cutline={photo.cutline} key={key}>{smallPhotoComponentReverse}</SmallPhotoDesktopContainerReverse>

			default:
			return null
		}
	},
	
	photos: (object: Object, key: number) => <Photos photos={object.value} key={key}/>,

	slideshow: (object: Object, key: number) => <Slideshow photos={object.value} key={key}/>,

	loadPhoto: function(path: string){
		return require(`${path}`);
	},

	annotation: (object: Object, key: number) => <Annotation text={object.value.text} annotation={object.value.annotation} key={key} />,

	annotations: (object: Object, key: number) => <Annotations annotations={object.value} key={key} />,

	photoessay: (object: Object, key: number) => <PhotoEssayContainer photos={object.value} key={key} loadPhoto={loadPhoto} />,

	pullquote: (object: Object, key: number) => <PullQuote quote={object.value.quote} source={object.value.source} key={key} />,

	subscribe: (object: Object, key: number) => <Subscribe link={object.value.link} key={key} />,

	related: (object: Object, key: number) => <RelatedContent headline={object.value.headline} link={object.value.link} key={key} />,

	iframe: (object: Object, key: number) => <ResponsiveiFrame src={object.value.source} key={key}/>,

	video: function(object: Object, key: number){
		const video = object.value;
		return <Video src={video.source} autoPlay={video.autoplay} muted={video.muted} loop={video.loop} controls={video.controls}/>
	},

	renderComponent: function(object: Object, key: number){
		return object.type && this[object.type] ? this[object.type](object, key) : null;
	}
};