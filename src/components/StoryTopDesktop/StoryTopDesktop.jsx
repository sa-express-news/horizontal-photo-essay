// @flow

import React, {Component} from 'react';

import StoryMetaDesktop from '../StoryMetaDesktop/StoryMetaDesktop';

import './StoryTopDesktop.css';

class StoryTopDesktop extends Component {
	props:{
		data: Object
	};

	loadPhoto = (path: string) =>{
		return require(`../../images/${path}`);
	}

	render(){
		const photoPath = this.loadPhoto(this.props.data.image.source);

		const style = {
			backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${photoPath})`
		};

		return(
			<div className='StoryTopDesktop' style={style}>
				<StoryMetaDesktop meta={this.props.data.meta}/>
			</div>
		)
	}
}

export default StoryTopDesktop;