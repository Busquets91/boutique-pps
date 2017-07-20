import React from 'react';

export default class HiddenSM extends React.Component {
	render() {
		return (
			<span className="hidden-sm">
				{this.props.children}
			</span>
		);
	}
}