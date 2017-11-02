import React from 'react';

// components
import Meta from '../Meta/Meta';

export default ({ meta }) => (
	<div>
		<div className="background-img mobile-img">
			<img src={meta.slideshow_hero_img} alt={meta.slideshow_title} />
		</div>
		<Meta meta={meta} />
	</div>
);