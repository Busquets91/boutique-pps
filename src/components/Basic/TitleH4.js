import React from 'react';

export default class TitleH4 extends React.Component {
	render() {
		return (
			<h4 className={this.props.className} id={this.props.id}>
				{this.props.children}
			</h4>
		);
	}
}