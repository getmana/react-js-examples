import React from 'react';


class TimerContent extends React.Component {
render () {
	const { text } = this.props;
	if (text > 0) {
		return (
		<h2>Your Time:  
			<span className={text<6 ? 'red-color' : 'green-color'}> { text } </span>	
		</h2>
		)
	}	else	{
		return (
				<div>
					<div className="bang-box">
						<p>Your Time is Over!!!!</p>
						<img src="https://usadultliteracy.files.wordpress.com/2012/06/bang1.png" />
					</div>
				</div>
			)
		}
	
	}
}
export default TimerContent;