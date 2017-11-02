// @flow

import React, { Component } from 'react';

// components
import SplashMobile 	from '../SplashMobile/SplashMobile';
import SplashDesktop 	from '../SplashDesktop/SplashDesktop';
import Meta				from '../Meta/Meta';

// scss
import './SplashContainer.scss';


class SplashContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isMobile: window.innerWidth < 768,
		};
	}

	componentDidMount() {
		window.addEventListener('resize', this.checkWidth.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.checkWidth.bind(this));
	}

	checkWidth() {
		const isMobile = window.innerWidth < 768;
		if (isMobile !== this.state.isMobile) {
			this.setState({ isMobile });
		}
	}

	render() {
		const { isMobile } 	= this.state;
		const { meta } 		= this.props;
		return (
			<div className="Splash">
				{isMobile && (
					<SplashMobile meta={meta} />
				)}
				{!isMobile && (
					<SplashDesktop hero={meta.slideshow_hero_img}><Meta meta={meta} /></SplashDesktop>
				)}
			</div>
		);
	}
}

export default SplashContainer;