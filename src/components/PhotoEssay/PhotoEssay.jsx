import React from 'react';
import _ from 'lodash';
import ReactVisibilitySensor from 'react-visibility-sensor';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Card from 'grommet/components/Card';
import Image from 'grommet/components/Image';
import Animate from 'grommet/components/Animate';

import './PhotoEssay.scss';

type propTypes = {
	photos: array,
    isCurrPhoto: func,
    updateCurrPhoto: func,
    setCaptionOptions: func,
    openCaption: func,
    getEssayClass: func,
    loadPhoto: func,
}

const addHeading = (text: string, tag: string, className: string, onClickHandle: func) => {
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
	<div className="PhotoEssay">
		<div className="photos">
			{_.map(props.photos, (photo: object, idx: number) => (
				<div key={idx}>
					{props.isCurrPhoto(idx) && (
						<Animate enter={{'animation': 'fade', 'duration': 1500, 'delay': 0}}>
							<Image
							  src={props.loadPhoto(photo.url)}
							  fit="contain"
							  full={true}
							  className="full-page-photo"
							/>
						</Animate>
					)}
					{!props.isCurrPhoto(idx) && (
						<Image
						  src={props.loadPhoto(photo.url)}
						  fit="contain"
						  full={true}
						  className="full-page-photo hide"
						/>
					)}
				</div>
			))}
		</div>
		<div className={props.getEssayClass()}>
			{_.map(props.photos, (photo: object, idx: number) => {
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
								<ReactVisibilitySensor onChange={props.updateCurrPhoto.bind(this, idx + 1)} />
							</Card>
							<Box basis="2/3" />
						</Box>
					</Box>
				);
			})};
		</div>
	</div>
);