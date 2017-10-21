// @flow

import React 	from 'react';
import Animate 	from 'grommet/components/Animate';

// scss
import './Photo.scss';

const setInlineStyles = (property, navBarHeight) => {
	return {
		[property]: window.innerHeight - navBarHeight - 3,
	};
}


export default ({ navBarHeight, slide }) => {
	return (
		<div className="Photo" style={setInlineStyles('height', navBarHeight)}>
			<div className="vertical-pos">
				<Animate enter={{'animation': 'fade', 'duration': 1500, 'delay': 0}}>
					<img src={slide.url} alt={slide.caption} style={setInlineStyles('maxHeight', navBarHeight)}/>
				</Animate>
			</div>
		</div>
	);
};