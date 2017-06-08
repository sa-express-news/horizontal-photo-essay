import React, {Component} from 'react';

class BylineDate extends Component {
	props: {
		text: string
	};

	render(){
		return(
			<p className='date'> By {this.props.text.toUpperCase()}</p>
		)
	}
}

export default BylineDate;