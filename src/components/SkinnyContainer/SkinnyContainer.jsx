// @flow

import React, {Component} from 'react';

class SkinnyContainer extends Component {
	props: {
		children: any,
		width: number
	};

	render(){
		const style = {
			margn: '0 auto',
			width: `${this.props.width}%`
		};

		return(
			<div className='SkinnyContainer' style={style} >
				{this.props.children}
			</div>
		)
	}
}

export default SkinnyContainer;