// @flow

import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

// components
import Splash 		from '../Splash/Splash';
import Slideshow 	from '../Slideshow/Slideshow';

// scss
import './App.scss';

import data from '../../data/data.json';

const renderSplash = () => <Splash meta={data.META} img={data.PHOTOS[5].url} />

const renderSlideshow = ({ match }) => <Slideshow photos={data.PHOTOS} slideIdx={match.params.slideIdx} />

export default () => (
	<Router>
		<div className="App">
			<Route exact path="/" render={renderSplash} />
			<Route path="/slide/:slideIdx" render={renderSlideshow} />
		</div>
	</Router>
);
