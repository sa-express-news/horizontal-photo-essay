// @flow

import React, {Component} from 'react';

import Annotation from '../Annotation/Annotation';

import './Annotations.css';

class Annotations extends Component{
	props: {
		annotations: Array<any>
	};

	render(){
		const components = this.props.annotations.map((annotation: Object, key: number)=>{
			return <Annotation text={annotation.text} annotation={annotation.annotation} key={key} />
		});

		return(
			<div className='Annotations'>
				{components}
			</div>
		)
	}
}

export default Annotations;