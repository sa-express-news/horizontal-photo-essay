// @flow

import React, {Component} from 'react';

import Section from '../Section/Section';

class Sections extends Component {
	props: {
		sections: Object
	};

	render(){
		const sections = this.props.sections;
		//Get rid of the leading array item, which is just a number key
		const arrayOfSections = Object.entries(sections).map((data)=>{
			return data[1];
		});

		const components = arrayOfSections.map((section, index) =>{
			return <Section data={section} key={index}/>
		});

		return(
			<div className='sections'>
				{components}
			</div>
		)
	}
}

export default Sections;