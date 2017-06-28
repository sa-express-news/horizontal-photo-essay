// @flow

import React, {Component} from 'react';

import './RelatedContent.css';

class RelatedContent extends Component{
	props: {
		link: string,
		headline: string
	};

	render(){
		return(
			<div className='RelatedContent'>
				<p className='RelatedContentHeader'>Related Content:</p>
				<a href={this.props.link} alt={this.props.headline}><p>{this.props.headline}</p></a>
			</div>
		)
	}
}

export default RelatedContent;