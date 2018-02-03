import React from 'react';
import TextContent from './textContent';

class Counter extends React.Component {
	constructor() {
		super();
		this.state = {
			number: 0
		}
		//второй вариант биндинга
		//this.decrease = this.decrease.bind(this) 
	}

	increase() {
		let newNumber = this.state.number + 1;
		this.setState({
			number: newNumber
		})
	}

	decrease() {
		let newNumber = this.state.number - 1;
		this.setState({
			number: newNumber
		})
	}

	render() {
		return (
			<div className="counter">
				<TextContent text={ this.state.number } />
				<button onClick={this.increase.bind(this)}> + </button>
				<button onClick={this.decrease.bind(this)}> - </button>
			</div>
		)
	}
}

export default Counter; 