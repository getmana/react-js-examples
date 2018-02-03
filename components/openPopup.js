import React from 'react';
import Popup from './popup';

class OpenPopup extends React.Component {
	constructor() {
		super();
		this.state = {
			text: '',
			color: '#ffffff',
			isPopupOpened: false
		}
		this.changeText = this.changeText.bind(this);
		this.changeColor = this.changeColor.bind(this);
		this.openPopupFunction = this.openPopupFunction.bind(this);

	}

	changeText(e) {
		this.setState({
			text: e.target.value
		})
	}

	changeColor(e) {
		this.setState({
			color: e.target.value
		})
	}

	openPopupFunction() {
		if (this.state.isPopupOpened) {
			this.setState({
				isPopupOpened: false
			}) 
		} else {
			this.setState({
				isPopupOpened: true
			}) 
		}
		
	}

	render() {
		if (this.state.isPopupOpened) {
			return(
				<Popup text={this.state.text} color={this.state.color} functionClose={this.openPopupFunction} />
			)
		} else {
			return (
				<div>
					<input type="text" placeholder="Insert your text" value={this.state.text} onChange={this.changeText}/>
					<input type="color" value={this.state.color} onChange={this.changeColor}/>
					<button onClick={this.openPopupFunction}>open</button>
				</div>
			)
		}
		
		
	}
}


export default OpenPopup;