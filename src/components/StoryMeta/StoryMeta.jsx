import React, {Component} from 'react';

import Headline from '../Headline/Headline';
import Subhead from '../Subhead/Subhead';
import Byline from '../Byline/Byline';
import BylineDate from '../BylineDate/BylineDate';

class StoryMeta extends Component{
	props: {
		meta: Object
	};

	render(){
		return(
			<div className='StoryMeta'>
				<Headline text={this.props.meta.headline}/>
				<Subhead text={this.props.meta.subhead}/>
				<Byline text={this.props.meta.byline}/>
				<BylineDate text={this.props.meta.date}/>
			</div>
		)
	}
}

export default StoryMeta;