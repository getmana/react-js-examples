import React from 'react';

class Popup extends React.Component {
	constructor() {
		super();
	}

	render() {
		const { text, color } = this.props;
		return (
			<div className="popup-wrapper">
				<div className="popup" style={{ 'backgroundColor': color }}>
					<p>{ text }</p>
					<button onClick={() => {this.props.functionClose()} }>X</button>
				</div>
			</div>
		)
	}
}

export default Popup;