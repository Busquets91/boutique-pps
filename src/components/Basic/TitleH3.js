import React from 'react';

export default class TitleH3 extends React.Component {
	render() {
		return (
			<h3 className={this.props.className} id={this.props.id}>
				{this.props.children}
			</h3>
		);
	}
}