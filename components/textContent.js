import React from 'react';


class TextContent extends React.Component {
render () {
	const { text } = this.props;
	return (
		<h2>Counter = 
			<span className={text<0 ? 'red-color' : 'green-color'}> { text } </span>	
		</h2>
	)
}
}
export default TextContent;