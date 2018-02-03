import React from 'react';
import CellColor from './cellColor';

class ColorPicker extends React.Component {
	constructor() {
		super();
		this.state = {
			colorsList: [
				'red', 'lime', 'blue', 'orange', 'purple', 'yellow', 'white', 'silver', 'deeppink'
			],
			currentColor: 'red'
		}
	}
	changeColor(color) {
		let newColor = color;
		this.setState({
			currentColor: newColor
		})
	}
	render() {
		return (
			<div>
				<div className="box-with-colors">
					{
						this.state.colorsList.map((color, index) => {
							return (
								<div key={index} onClick={ () => {this.changeColor(color)}}>
									<CellColor key={index} color={color} />
								</div>
							)
						})
					}		
				</div>
				<div className="colorful-box" style={ {'background': this.state.currentColor} }>

				</div>
			</div>
		)
	} 
}

export default ColorPicker;