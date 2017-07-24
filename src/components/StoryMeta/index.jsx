import React, {Component} from 'react';

import Headline from '../Headline';
import Subhead from '../Subhead';
import BylineContainer from '../BylineContainer';
import SkinnyContainer from '../SkinnyContainer';
import LeftYellowBorder from '../LeftYellowBorder';
import StorySeriesBlock from '../StorySeriesBlock';
import './StoryMeta.css';

class StoryMeta extends Component{
	props: {
		meta: Object
	};

	render(){
		return(
			<div className='StoryMeta'>
				<SkinnyContainer width={85}>
					<StorySeriesBlock text='Story Series Here'/>
					<Headline text={this.props.meta.headline}/> 
					<LeftYellowBorder>
						<Subhead text={this.props.meta.subhead}/>
						<BylineContainer byline={this.props.meta.byline} date={this.props.meta.date}/>
					</LeftYellowBorder>
				</SkinnyContainer>
			</div>
		)
	}
}

export default StoryMeta;