import React from 'react';

/**
 * General description:
 * NavBarButton is specific component that contains different buttons in the navbar
 */
export default class NavBarButton extends React.Component {
	render() {
		return (
			<div className="navbar-buttons">
				{this.props.children}
			</div>
		);
	}
}