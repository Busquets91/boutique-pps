import React from 'react';

export default class Div extends React.Component {
	render() {
		return (
			<div className={this.props.className} id={this.props.id} >
				{this.props.children}
			</div>
		);
	}
}