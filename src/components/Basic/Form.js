import React from 'react';

export default class Form extends React.Component {
	render() {
		return (
			<form action={this.props.action} method="post" role={this.props.role} className={this.props.className}>
				{this.props.children}
			</form>
					);
	}
}