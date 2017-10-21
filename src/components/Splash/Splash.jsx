// @flow

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// scss
import './Splash.scss';


// subcomponents

const Meta = ({ meta }) => (
	<div className="meta">
		<a href="/"><img src="//ww2.hdnux.com/photos/66/70/21/14386273/4/rawImage.png" className="logo" alt="en-logo" /></a>
		<h2 className="headline">{meta.slideshow_title}</h2>
		<h4 className="photographer">Photos by {meta.slideshow_photographer}</h4>
		<h4 className="date">{meta.slideshow_date}</h4>
		<Link to='/slide/1' className="start">Start</Link>
	</div>
);

const MobileSplash = ({ meta, img }) => (
	<div>
		<div className="background-img mobile-img">
			<img src={img} alt={meta.slideshow_title} />
		</div>
		<Meta meta={meta} />
	</div>
);

const DesktopSplash = ({ meta, img, styles }) => (
	<div className="background-img desktop-img" style={styles}>
		<Meta meta={meta} />
	</div>
);


// main component

class Splash extends Component {
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

	setDesktopSplashImgStyles() {
		const { img } = this.props;
		return {
			backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1), rgb(0, 0, 0)), url("${img}")`,
		};
	}

	getSplash() {
		return this.state.isMobile ? <MobileSplash {...this.props} /> : <DesktopSplash {...this.props} styles={this.setDesktopSplashImgStyles()} />;
	}

	render() {
		return (
			<div className="Splash">
				{this.getSplash()}
			</div>
		);
	}
}

export default Splash;