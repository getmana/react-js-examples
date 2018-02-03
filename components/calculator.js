import React from 'react';

class Calculator extends React.Component {
	constructor() {
		super();
		this.state = {
			currentNumber: '0',
			numbers: [
				'7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'
			],
			signs: [
				'+-', 'sqrt', '/', '%', '*', '1/x', '-', '+', '='
			],
			clearBtns: [
				'Bsp', 'CE', 'C'
			],
			bufer: [
				0, 0
			],
			percentFlag: false
		};

	}

	changeNumber(number) {
		let newNumber = '';
		if (this.state.currentNumber == '0') {
			if (number == ',') {
				newNumber = this.state.currentNumber + number;
				
			}	else {
				newNumber = number;
			}
		}	else	{
			newNumber = this.state.currentNumber + number;
		};
		this.setState({
			currentNumber: newNumber
		});
		
	}


	clearActions(index) {
		switch (index) {
			case 0: let str = String(this.state.currentNumber);
					str = str.substr(0, str.length - 1);
					this.setState({
						currentNumber: str
					});
					break;
			case 1: this.setState({
						currentNumber: '0'
					});
					break;
			case 2: this.setState({
						currentNumber: '0'
					});
					break;
			default: break;
		}
	}

	signActions(index) {
		let buferNumber = parseFloat(this.state.currentNumber);
		let buferIndex = index;
		switch (index) {
			case 0: 
				if (buferNumber > 0) {
					this.setState({
						currentNumber: '-' + this.state.currentNumber
						})
				}	else	{
					this.setState({
						currentNumber: this.state.currentNumber.substring(1)
					})
				};
				break;
			case 1: 
				buferNumber > 0 ?
				this.setState({
					currentNumber: Math.sqrt(buferNumber)
					}) :
				this.setState({
					currentNumber: 'Error'
					});
				break;
			case 3:
				if (this.state.bufer[1] !== 0) {
					this.setState({
						percentFlag: true,
						currentNumber: this.state.currentNumber + '%'
						});
				}
				break;
			case 5: 
				buferNumber == 0 ?
				this.setState({
					currentNumber: 'Error'
					}) : 
				this.setState({
					currentNumber: 1 / buferNumber 
					})
				break;
			case 8:
				if (this.state.bufer[1] !== 0) {
					this.count();
				};
				break;
			default:  
				this.state.bufer = [buferNumber, buferIndex];
				this.setState({
					bufer: [
						buferNumber,
						buferIndex
					],
					currentNumber: this.state.currentNumber + ' ' + this.state.signs[index] + ' '
				})
		}
	}

	count() {
		let position = this.state.currentNumber.lastIndexOf(' ');
		let secondArg = parseFloat(this.state.currentNumber.substring(position+1));
		if (this.state.percentFlag) {
			secondArg = this.state.bufer[0] * secondArg / 100
			this.setState({
				percentFlag: false	
			})
		};
		switch (this.state.bufer[1]) {
			case 2:
				this.setState({
					currentNumber: this.state.bufer[0] / secondArg
				});
				break;
			case 4:
				this.setState({
					currentNumber: this.state.bufer[0] * secondArg
				});
				break;
			case 6:
				this.setState({
					currentNumber: this.state.bufer[0] - secondArg
				});
				break;
			case 7:
				this.setState({
					currentNumber: this.state.bufer[0] + secondArg
				});
			default: break;
		};
		this.setState({
			bufer: [0, 0]
		})
	}

	render() {
		return (
			<div>
				<div className="calc-screen">
					{this.state.currentNumber}
				</div>
					<div className="left-panel">
						<div className="clear-btns">
							{
								this.state.clearBtns.map((clearBtn, index) => {
									return (
										<div className="calc-btn" key={index}>
											<button onClick={ () => {this.clearActions(index)}}>{clearBtn}</button>
										</div>
									)
								})
							}
						</div>
						<div className="number-box">
							{
								this.state.numbers.map((number, index) => {
									return (
										<div className="calc-btn" key={index}>
											<button onClick={ () => {this.changeNumber(number)}}>{number}</button>
										</div>
									)
								})
							}
						</div>
					</div>
				<div className="signs-box">
					{
						this.state.signs.map((sign, index) => {
							return (
								<div className="calc-btn" key={index}>
									<button onClick={ () => {this.signActions(index)}}>{sign}</button>
								</div>
							)
						})
					}
				</div>
			</div>
		)
	}
};



export default Calculator;