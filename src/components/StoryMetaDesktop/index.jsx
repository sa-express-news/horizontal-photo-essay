import React, {Component} from 'react';

import Headline from '../Headline';
import Subhead from '../Subhead';
import StorySeriesBlock from '../StorySeriesBlock';
import BylineContainer from '../BylineContainer';
import LeftYellowBorder from '../LeftYellowBorder';

import './StoryMetaDesktop.css';

class StoryMetaDesktop extends Component{
	props: {
		meta: Object
	};

	render(){
		return(
			<div className='StoryMetaDesktop'>
			<StorySeriesBlock text={this.props.meta.series}/>
				<Headline text={this.props.meta.headline}/>
				<LeftYellowBorder>
					<Subhead text={this.props.meta.subhead}/>
					<BylineContainer byline={this.props.meta.byline} date={this.props.meta.date}/>
				</LeftYellowBorder>
			</div>
		)
	}
}

export default StoryMetaDesktop;