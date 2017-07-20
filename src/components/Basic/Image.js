import React from 'react';

export default class Image extends React.Component {
	render() {
		return (
			<img src={this.props.src} alt={this.props.alt} className={this.props.className}/>
		);
	}
}