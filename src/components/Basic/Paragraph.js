import React from 'react';

export default class Paragraph extends React.Component {
	render() {
		return (
			<p className={this.props.className} id={this.props.id}>
				{this.props.children}
			</p>
		);
	}
}