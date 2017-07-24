import React from 'react';

export default class BoxHeader extends React.Component {
	render() {
		return (
			<div className="box-header" id={this.props.id} >
				{this.props.children}
			</div>
		);
	}
}