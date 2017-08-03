import React from 'react';
import PropTypes from 'prop-types';

/**
 * General description:
 * Col is a simple component to create a bootsrap col div
 */
export default class Col extends React.Component {
	constructor(props) {
		super(props);
		this.className = "";
		for (var i = 0; i < this.props.args.length; i++) {
			this.className += " col-" + this.props.args[i].type + "-" + this.props.args[i].size;
		}
		if ("className" in this.props) {
			this.className += " " + this.props.className;
		}
	}

	render() {
		return (
			<div className={this.className} id={this.props.id}>
				{this.props.children}
			</div>
		);
	}
}

Col.propTypes = {
	/**
	* className: additionnal className
	*/
	className: PropTypes.string,
	/**
	* id: id of the element
	*/
	id: PropTypes.string,
	/**
	* args: array of type of device (md, sd ...) and size for the number of column 
	*/
	args: PropTypes.arrayOf(PropTypes.shape({
		type: PropTypes.oneOf(["sd", "md", "xs", "sm"]),
		size: PropTypes.number
	}))
}