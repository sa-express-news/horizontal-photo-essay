import React, {Component} from 'react';

import Byline from '../Byline';
import BylineDate from '../BylineDate';

import './BylineContainer.css';

class BylineContainer extends Component{
	props: {
		byline: string,
		date: string
	};

	render(){
		return(
			<div className='BylineContainer'>
				<Byline text={this.props.byline}/>
				<BylineDate text={this.props.date}/>
			</div>
		)
	}
}

export default BylineContainer;