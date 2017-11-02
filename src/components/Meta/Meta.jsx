import React 	from 'react';
import { Link } from 'react-router-dom';

export default ({ meta }) => (
	<div className="meta">
		<a href="/"><img src="//ww2.hdnux.com/photos/66/70/21/14386273/4/rawImage.png" className="logo" alt="en-logo" /></a>
		<h2 className="headline">{meta.slideshow_title}</h2>
		<h4 className="photographer">Photos by {meta.slideshow_photographer}</h4>
		<h4 className="date">{meta.slideshow_date}</h4>
		<Link to='/slide/1' className="start">Start</Link>
	</div>
);