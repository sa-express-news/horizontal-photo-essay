import React, {Component} from 'react';

import './BylineDate.css';

class BylineDate extends Component {
	props: {
		text: string
	};

	render(){
		return(
			<p className='Date'>{this.props.text}</p>
		)
	}
}

export default BylineDate;