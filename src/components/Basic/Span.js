import React from 'react';

export default class Span extends React.Component {
	render() {
		return (
			<span className={this.props.className} id={this.props.id} >
				{this.props.children}
			</span>
		);
	}
}