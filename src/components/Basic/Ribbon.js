import React from 'react';
import PropTypes from 'prop-types';


/**
 * General description:
 * Ribbon is a particular element that display a ribbon on an item
 */
export default class Ribbon extends React.Component {
	constructor(props) {
		super(props);
		this.nameClass = "ribbon " + this.props.type;
		this.txt = "";
		if (this.props.type === "new")
			this.txt = "NEW";
		if (this.props.type === "sale")
			this.txt = "PROMO";
	}
	render() {
		return (
			<div className={this.nameClass}>
				<div className="theribbon">{this.txt}</div>
				<div className="ribbon-background"></div>
			</div>
		);
	}
}

Ribbon.propTypes = {
	/**
	* type: type of ribbon
	*/
	type: PropTypes.oneOf(['new', 'sale'])
}
