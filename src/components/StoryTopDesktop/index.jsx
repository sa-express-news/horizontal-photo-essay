// @flow

import React, {Component} from 'react';

import StoryMetaDesktop from '../StoryMetaDesktop';


import './StoryTopDesktop.css';

class StoryTopDesktop extends Component {
	props:{
		data: Object
	};

	render(){

		const style = {
			backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.1), rgba(0,0,0,.1), rgba(0,0,0,1)), url(${this.props.data.image.source})`
		};

		return(
			<div className='StoryTopDesktop' style={style}>
				<StoryMetaDesktop meta={this.props.data.meta}/>
			</div>
		)
	}
}

export default StoryTopDesktop;