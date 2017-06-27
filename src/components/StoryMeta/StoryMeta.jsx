import React, {Component} from 'react';

import Headline from '../Headline/Headline';
import Subhead from '../Subhead/Subhead';
import BylineContainer from '../BylineContainer/BylineContainer';
import './StoryMeta.css';

class StoryMeta extends Component{
	props: {
		meta: Object
	};

	render(){
		return(
			<div className='StoryMeta'>
				<Headline text={this.props.meta.headline}/>
				<Subhead text={this.props.meta.subhead}/>
				<BylineContainer byline={this.props.meta.byline} date={this.props.meta.date}/>
			</div>
		)
	}
}

export default StoryMeta;