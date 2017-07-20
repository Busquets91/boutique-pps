import React from 'react';

export default class TitleH1 extends React.Component {
	render() {
		return (
			<h1 className={this.props.className} id={this.props.id}>
				{this.props.children}
			</h1>
		);
	}
}