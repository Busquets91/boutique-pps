import React from 'react';

export default class Row extends React.Component {
	render() {
		return (
			<div className="row" id={this.props.id} >
				{this.props.children}
			</div>
		);
	}
}