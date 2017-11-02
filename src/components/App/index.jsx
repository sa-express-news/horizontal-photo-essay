// @flow

import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

// components
import SplashContainer 	from '../SplashContainer/SplashContainer';
import Slideshow 		from '../Slideshow/Slideshow';

// scss
import './App.scss';

import data from '../../data/data.json';

const renderSplash = () => <SplashContainer meta={data.META} />

const renderSlideshow = ({ match }) => <Slideshow photos={data.PHOTOS} socialURL={data.META.slideshow_url_for_social} slideIdx={match.params.slideIdx} />

export default () => (
	<Router>
		<div className="App">
			<Route exact path="/" render={renderSplash} />
			<Route path="/slide/:slideIdx" render={renderSlideshow} />
		</div>
	</Router>
);
