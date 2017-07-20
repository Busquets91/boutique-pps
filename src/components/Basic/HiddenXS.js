import React from 'react';

export default class HiddenXS extends React.Component {
	render() {
		return (
			<span className="hidden-xs">
				{this.props.children}
			</span>
		);
	}
}