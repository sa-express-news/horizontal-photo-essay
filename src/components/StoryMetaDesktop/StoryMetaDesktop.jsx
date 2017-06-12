import React, {Component} from 'react';

import Headline from '../Headline/Headline';
import Subhead from '../Subhead/Subhead';
import Byline from '../Byline/Byline';
import BylineDate from '../BylineDate/BylineDate';

import './StoryMetaDesktop.css';

class StoryMetaDesktop extends Component{
	props: {
		meta: Object
	};

	render(){
		return(
			<div className='StoryMetaDesktop'>
				<Headline text={this.props.meta.headline}/>
				<Subhead text={this.props.meta.subhead}/>
				<Byline text={this.props.meta.byline}/>
				<BylineDate text={this.props.meta.date}/>
			</div>
		)
	}
}

export default StoryMetaDesktop;