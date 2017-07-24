import React from 'react';

export default class Box extends React.Component {
	render() {
		return (
			<div className="box" id={this.props.id} >
				{this.props.children}
			</div>
		);
	}
}