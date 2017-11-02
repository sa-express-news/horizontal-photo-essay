// @flow

import React, { Component } from 'react';
import ReactDOM 			from 'react-dom';

// components
import SocialBlock from '../SocialBlock/SocialBlock';

// scss
import './NavBar.scss';

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			textHeight: 0,
		};
	}

	componentDidMount() {
		this.setTextHeight();
		window.addEventListener('resize', this.setTextHeight.bind(this));
		window.addEventListener('keydown', this.manageKeypress.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.setTextHeight.bind(this));
		window.removeEventListener('keydown', this.manageKeypress.bind(this));
	}

	componentDidUpdate(prevProps, prevState) {
		this.setTextHeight(prevState.navBarHeight);
	}

	setTextHeight() {
		const textHeight = this.getTextHeight();
		if (textHeight !== this.state.textHeight) {
			this.setState({ textHeight });
		}
	}

	getTextHeight() {
		const textBlock = ReactDOM.findDOMNode(this.refs['text-block']);
		return textBlock ? textBlock.clientHeight : 0;
	}

	getBottomPosition() {
		const { textHeight } = this.state;
		return 20 / Math.round(textHeight / 20);
	}

	setInlineTextStyles() {
		return {
			bottom: this.getBottomPosition(),
		};
	}

	moveToNextSlide() {
		const { idx, len, history } = this.props;
		const curr 					= idx + 1;
		if (curr + 1 <= len) {
			history.push(`/slide/${curr + 1}`);
		} else {
			history.push(`/slide/1`);
		}
	}

	moveToPrevSlide() {
		const { idx, len, history } = this.props;
		const curr 					= idx + 1;
		if (curr - 1 > 0) {
			history.push(`/slide/${curr - 1}`);
		} else {
			history.push(`/slide/${len}`);
		}
	}

	manageKeypress(e) {
		if (e.keyCode === 39) {
			this.moveToNextSlide();
		} else if (e.keyCode === 37) {
			this.moveToPrevSlide();
		}
	}

	render() {
		return (
			<div className="NavBar">
				{window.innerWidth < 768 && (
					<div ref="text-block" className="text">{this.props.slide.caption}</div>
				)}
				<div className="primary-navigation">
					<SocialBlock socialURL={this.props.socialURL} />
					<div className="arrows">
						<div onClick={this.moveToPrevSlide.bind(this)} className="control-arrow prev">
							<i className="fa fa-angle-left"></i>
						</div>
						<div onClick={this.moveToNextSlide.bind(this)} className="control-arrow next">
							<i className="fa fa-angle-right"></i>
						</div>
					</div>
				</div>
				{window.innerWidth >= 768 && (
					<div ref="text-block" style={this.setInlineTextStyles()} className="text">{this.props.slide.caption}</div>
				)}
			</div>
		);
	}
}

export default NavBar;