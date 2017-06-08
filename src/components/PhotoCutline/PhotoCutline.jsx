// @flow

import React, {Component} from 'react';

class PhotoCutline extends Component {
	props:{
		text: string
	};

	render(){
		return(
			<p className='photoCutline'>{this.props.text}</p> 
		)
	}
}

export default PhotoCutline;