import React, {Component} from 'react';

import Headline from '../Headline';
import Subhead from '../Subhead';
import StorySeriesBlock from '../StorySeriesBlock';
import BylineContainer from '../BylineContainer';

import './StoryMetaDesktop.css';

class StoryMetaDesktop extends Component{
	props: {
		meta: Object
	};

	render(){
		return(
			<div className='StoryMetaDesktop'>
			<StorySeriesBlock text='Story Series Here'/>
				<Headline text={this.props.meta.headline}/>
				<Subhead text={this.props.meta.subhead}/>
				<BylineContainer byline={this.props.meta.byline} date={this.props.meta.date}/>
			</div>
		)
	}
}

export default StoryMetaDesktop;