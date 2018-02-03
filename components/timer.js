import React from 'react';
import TimerContent from './timerContent';

class Timer extends React.Component {
	constructor() {
		super();
		this.state = {
			time: 30
		};
		this.changeTime = this.changeTime.bind(this);
	}

	componentDidMount() {
		setTimeout(this.changeTime, 1000);
	}

	changeTime() {
		if (this.state.time >= 2) {
			let newTime = this.state.time - 1;
			this.setState({
				time: newTime
			});
			setTimeout(this.changeTime.bind(this), 1000);
		}	else	{
			this.setState({
				time: 0
			})
		}
		
	}

	render() {
		return (
			<div>
				<div className="timer-box">
					<TimerContent text={ this.state.time } />
				</div>
			</div>
			)
	}
};

export default Timer;