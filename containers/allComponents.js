import React from 'react';
import OpenPopup from '../components/openPopup';
import Counter from '../components/counter';
import ColorPicker from '../components/colorPicker';
import Timer from '../components/timer';
import Calculator from '../components/calculator';

const AllComponents = () => {
	return (
		<div>
			<h2>Counter</h2>
			<Counter />
			<hr />
			<h2>Color Picker</h2>
			<ColorPicker />
			<hr />
			<h2>Calculator</h2>
			<Calculator />
			<hr />
			<h2>Open Popup</h2>
			<OpenPopup />
			<hr />
			<h2>Timer</h2>
			<Timer />
			<hr />
		</div>
	)
};

export default AllComponents;