import React from 'react';

export default class NavBarMenu extends React.Component {
	render() {
		return (
			<div className="navbar-collapse collapse" id="navigation">
				{this.props.children}
			</div>
		);
	}
}