import React, {Component} from 'react';

import Byline from '../Byline/Byline';
import BylineDate from '../BylineDate/BylineDate';

import './BylineContainer.css';

class BylineContainer extends Component{
	props: {
		byline: string,
		date: string
	};

	render(){
		return(
			<div className='StoryMeta'>
				<Byline text={this.props.meta.byline}/>
				<BylineDate text={this.props.meta.date}/>
			</div>
		)
	}
}

export default BylineContainer;