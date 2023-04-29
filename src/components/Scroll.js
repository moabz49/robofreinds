import React from 'react';

// Creating a Scroll that returns whatever is WRAPPED within it.

const Scroll = (props) => {
	return (
		<div style={{ overflowY: 'scroll', border: '1px solid black', height: '500px' }}>
			{props.children}
		</div>
	);
};

export default Scroll;