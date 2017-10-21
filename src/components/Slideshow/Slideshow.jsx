// @flow

import React, { Component } from 'react';
import ReactDOM 			from 'react-dom';
import { Route } 			from 'react-router-dom';

// components
import ProgressBar 	from '../ProgressBar/ProgressBar';
import Photo 		from '../Photo/Photo';
import NavBar 		from '../NavBar/NavBar';

// scss
import './Slideshow.scss';

class Slideshow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currIdx: this.setCurrIdx(props.slideIdx),
			navBarHeight: 0,
			isSplash: true,
		};
	}

	componentDidMount() {
		this.setNavBarheight();
		window.addEventListener('resize', this.setNavBarheight.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.setNavBarheight.bind(this))
	}

	componentDidUpdate(prevProps, prevState) {
		this.setNavBarheight();
	}

	componentWillReceiveProps(nextProps) {
		const currIdx = this.setCurrIdx(nextProps.slideIdx);
		if (currIdx !== this.state.currIdx) {
			this.setState({ currIdx });
		}
	}

	setCurrIdx(idx) {
		return idx ? parseInt(idx, 10) - 1 : 0;
	}

	getCurrSlide() {
		return this.props.photos[this.state.currIdx];
	}

	getSlideshowLength() {
		return this.props.photos.length;
	}

	getNavBarHeight() {
		const navBar = ReactDOM.findDOMNode(this.refs['nav-bar']);
		return navBar ? navBar.clientHeight : 0;
	}

	setNavBarheight() {
		const navBarHeight = this.getNavBarHeight();
		if (navBarHeight !== this.state.navBarHeight) {
			this.setState({ navBarHeight });
		}
	}

	render() {
		const slide = this.getCurrSlide();
		const len 	= this.getSlideshowLength();

		return (
			<div className='Slideshow'>
				<ProgressBar idx={this.state.currIdx} len={len} />
				<Route ref="nav-bar" render={({ history }) => (
					<NavBar slide={slide} idx={this.state.currIdx} len={len} history={history} />
				)} />
				<Photo slide={slide} navBarHeight={this.state.navBarHeight} />
			</div>
		);
	}
}

export default Slideshow;