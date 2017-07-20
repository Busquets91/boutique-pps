import React from 'react';

export default class NavBarButton extends React.Component {
	render() {
		return (
			<div className="navbar-buttons">
				{this.props.children}
			</div>
		);
	}
}