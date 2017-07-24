import React from 'react';


export default class Col extends React.Component {
	render() {
		const nameClass = "col-" + this.props.type + "-" + this.props.size;
		return (
			<div className={nameClass} id={this.props.id}>
				{this.props.children}
			</div>
		);
	}
}