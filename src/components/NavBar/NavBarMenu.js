import React from 'react';

/**
 * General description:
 * NavBarMenu is specific component that display the menu in the navbar
 */
export default class NavBarMenu extends React.Component {
	render() {
		return (
			<div className="navbar-collapse collapse" id="navigation">
				{this.props.children}
			</div>
		);
	}
}