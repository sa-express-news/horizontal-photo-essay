import React, {Component} from 'react';

import './Button.css';

class Button extends Component {
	props: {
		text: string,
		link: string
	};

	static defaultProps = {
    	link: null
  	};

	render(){
		const link = this.props.link;
		return(
			<div>
			{link !== null &&
				<a href={this.props.link} alt={this.props.text}>
					<button className='Button'>{this.props.text}</button>
				</a>
			}
			{link === null &&
				<button className='Button'>{this.props.text}</button>
			}
			</div>
		)
	}
}

export default Button;