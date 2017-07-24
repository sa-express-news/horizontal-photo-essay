import React, {Component} from 'react';

import './Byline.css';

class Byline extends Component {
	props: {
		text: string
	};

	render(){
		return(
			<p className='Byline'>Story by {this.props.text}</p>
		)
	}
} 

export default Byline;