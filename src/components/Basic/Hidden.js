import React from 'react';
import PropTypes from 'prop-types';


/**
 * General description:
 * Hidden is a component that is hidden for some device
 */
export default class Hidden extends React.Component {
	constructor(props) {
		super(props);
		this.className = "";
		for (var i = 0; i < this.props.types.length; i++) {
			this.className += " hidden-" + this.props.types[i];
		}
	}

	render() {
		return (
			<span className={this.className} id={this.props.id} >
				{this.props.children}
			</span>
		);
	}
}

Hidden.propTypes = {
	/**
	* id: id of the element
	*/
	id: PropTypes.string,
	/**
	* className: class of the element
	*/
	className: PropTypes.string,
	/**
	* id: id of the element
	*/
	types: PropTypes.arrayOf(PropTypes.oneOf(["xs", "sm", "sd"]))
}