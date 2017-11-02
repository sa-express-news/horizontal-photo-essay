import React from 'react';

const getStyles = hero => {
	return {
		backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1), rgb(0, 0, 0)), url("${hero}")`,
	};
};

export default props => (
	<div className="background-img desktop-img" style={getStyles(props.hero)}>
		{props.children}
	</div>
);