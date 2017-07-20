import React from 'react';

export default class OnlySR extends React.Component {
	render() {
		return (
			<span className="sr-only">
				{this.props.children}
			</span>
		);
	}
}