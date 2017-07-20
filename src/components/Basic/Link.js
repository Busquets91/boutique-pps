import React from 'react';

export default class Link extends React.Component {
	render() {
		return (
			<a href={this.props.href} className={this.props.className} data-toggle={this.props.dataToggle} data-target={this.props.dataTarget}>
				{this.props.children}
			</a>
		);
	}
}