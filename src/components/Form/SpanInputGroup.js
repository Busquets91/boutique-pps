import React from 'react';

export default class SpanInputGroup extends React.Component {
	render() {
		return (
			<span className="input-group-btn">
				{this.props.children}
			</span>
		);
	}
}