import React, {Component} from 'react';

class Byline extends Component {
	props: {
		text: string
	};

	render(){
		return(
			<p className='byline'> By {this.props.text}</p>
		)
	}
}

export default Byline;