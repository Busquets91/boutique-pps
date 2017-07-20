import React from 'react';

export default class Icon extends React.Component {

	render() {
		return (
			<input type={this.props.type} className={this.props.className} id={this.props.id} placeholder={this.props.placeholder}/>
		);
	}
}