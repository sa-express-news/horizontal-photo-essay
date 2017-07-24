// @flow

import React, { Component } from 'react';

import './LeftYellowBorder.css';

class LeftYellowBorder extends Component{
	props: {
		children: any
	};
 
	render(){
		return(
			<div className='LeftYellowBorder'>
				{this.props.children}
			</div>
		)
	}
}

export default LeftYellowBorder;