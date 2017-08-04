// @flow

import React from 'react';
import _ from 'lodash';
import ReactVisiblitySensor from 'react-visibility-sensor';

// grommet components
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Card from 'grommet/components/Card';
import Image from 'grommet/components/Image';
import Animate from 'grommet/components/Animate';

import './PhotoEssay.scss';

type propTypes = {
	photos: Array,
	loadPhoto: Function,
	essayId: string,
	getStylesBasedOnPositionInViewport: Object,
    isCurrPhoto: Function,
    updateCurrPhoto: Function,
    setCaptionOptions: Function,
    getEssayClass: Function,
}


const addHeading = (text: string, tag: string, className: string, onClickHandle: Function) => {
	return (
		<Heading
			margin="none"
			tag={tag}
			className={className}
			onClick={onClickHandle}
		>
			{text}
		</Heading>
	);
};

export default (props: propTypes) => (
	<div className="PhotoEssay" id={props.essayId}>
		<div className="photos">
			{_.map(props.photos, (photo: Object, idx: number) => (
				<div key={idx}>
					{props.isCurrPhoto(idx) && (
						<Animate enter={{'animation': 'fade', 'duration': 1500, 'delay': 0}}>
							<Image
							  src={props.loadPhoto(photo.source)}
							  style={props.getStylesBasedOnPositionInViewport()}
							  fit="contain"
							  full={true}
							  className="full-page-photo show"
							/>
						</Animate>
					)}
					{!props.isCurrPhoto(idx) && (
						<Image
						  src={props.loadPhoto(photo.source)}
						  fit="contain"
						  full={true}
						  className="full-page-photo hide"
						/>
					)}
				</div>
			))}
		</div>
		<div className={props.getEssayClass()}>
			{_.map(props.photos, (photo: Object, idx: number) => {
				const options = props.setCaptionOptions(photo);
				return (
					<Box 
						full={true} 
						className={options.wrapClass}
						margin="none"
						pad="none"
						key={idx}
					>
						<Box basis="1/3" />
							<Box
								direction="row"
								justify="start"
								align="center"
								className="text-box"
								key={idx}
								basis="2/3"
							>
							<Card 
								heading={addHeading(photo.title, 'h2', 'title', null)}
								description={addHeading(options.descriptionText, 'h4', options.descriptionClass, options.descriptionHandle)}
								justify="start"
								align="start"
								pad={{ horizontal: 'medium', vertical: 'none' }}
								basis="1/3"
							>
								<ReactVisiblitySensor onChange={props.updateCurrPhoto.bind(this, idx)} />
							</Card>
							<Box basis="2/3" />
						</Box>
					</Box>
				);
			})}
		</div>
	</div>
);
