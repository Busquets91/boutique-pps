import React from 'react';

export default class InputGroup extends React.Component {
	render() {
		return (
			<div className="input-group" id={this.props.id} >
				{this.props.children}
			</div>
		);
	}
}