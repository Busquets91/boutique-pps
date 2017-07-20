import React from 'react';

export default class ScreenReader extends React.Component {
	render() {
		return (
			<div className="sr-only">
				{this.props.children}
			</div>
		);
	}
}