// @flow

import React, {Component} from 'react';


class SkinnyContainer extends Component{
	props: {
		width: number,
		children: any
	};

	render(){
		const styles = {
			margin: '0 auto',
			width: `${this.props.width}%`
		};

		return(
			<div className='SkinnyContainer' style={styles}>
				{this.props.children}
			</div>
		)
	}

}

export default SkinnyContainer;