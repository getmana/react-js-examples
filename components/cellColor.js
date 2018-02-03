import React from 'react';

const CellColor = ({color}) => {
	return (
		<div className="cell-color" style={ {'background': color} }
		/>
	)
};

export default CellColor;