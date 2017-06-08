import React, {Component} from 'react';

import Heading from '../Heading/Heading';
import Byline from '..Byline/Byline';
import BylineDate from '../BylineDate/BylineDate';

class StoryMeta extends Component{
	props: {
		meta: Object
	};

	render(){
		return(
			<div className='StoryMeta'>
				<Heading tag={2} text={this.props.meta.headline}/>
				<Heading tag={5} text={this.props.meta.subhead}/>
				<Byline text={this.props.meta.byline}/>
				<BylineDate text={this.props.meta.date}/>
			</div>
		)
	}
}

export default StoryMeta;