// @flow

import React, {Component} from 'react';

import './Section.css';

class Section extends Component {
	props: {
		data: any,
		mapper: Object
	};

	render(){
		const { data, mapper } = this.props;

		const components = data.map((object, index) =>{
			return mapper.renderComponent(object, index);
		});

		return(
			<div className='Section'>
				{components}
			</div>
		)
	}
}

export default Section;