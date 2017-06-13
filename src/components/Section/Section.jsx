// @flow

import React, {Component} from 'react';

class Section extends Component {
	props: {
		data: any,
		mapper: Object
	};

	loadPhoto = (path: string) =>{
		return require(`../../images/${path}`);
	}

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