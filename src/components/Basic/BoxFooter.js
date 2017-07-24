import React from 'react';

export default class BoxFooter extends React.Component {
	render() {
		return (
			<div className="box-footer" id={this.props.id} >
				{this.props.children}
			</div>
		);
	}
}