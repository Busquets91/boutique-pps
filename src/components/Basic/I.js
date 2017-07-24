import React from 'react';

export default class I extends React.Component {
	render() {
		return (
			<i className={this.props.className} id={this.props.id} >
				{this.props.children}
			</i>
		);
	}
}