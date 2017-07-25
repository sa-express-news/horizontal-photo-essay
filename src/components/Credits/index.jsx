// @flow

import React, { Component } from 'react';

import LeftYellowBorder from '../LeftYellowBorder';

import './Credits.css';

class Credits extends Component{
	props: {
		credits: Array<string>
	};

	render(){
		let creds = this.props.credits.map((credit, index)=>{
			return <p className='Credit' key={index}>{credit.credit}</p>
		});

		return(
			<div className='CreditsContainer'>
				<LeftYellowBorder>
					{creds}
				</LeftYellowBorder>
			</div>
		)
	}
}

export default Credits;