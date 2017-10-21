// @flow

import React from 'react';

// scss
import './ProgressBar.scss';

const getWidth = (idx, len) => Math.round(((idx + 1) / len) * 100);

const getInlineStyles = (idx, len) => {
	return {
		width: `${getWidth(idx, len)}%`,
	};
};

export default props => (
	<div className="ProgressBar">
		<div className="current-progress" style={getInlineStyles(props.idx, props.len)} />
	</div>
);
