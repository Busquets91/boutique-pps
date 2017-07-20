import React from 'react';

export default class TitleH2 extends React.Component {
	render() {
		return (
			<h2 className={this.props.className} id={this.props.id}>
				{this.props.children}
			</h2>
		);
	}
}