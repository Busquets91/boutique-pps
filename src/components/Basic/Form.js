import React from 'react';
import PropTypes from 'prop-types';


/**
 * General description:
 * Form is a simple element that render a form
 */
export default class Form extends React.Component {
	render() {
		return (
			<form action={this.props.action} method={this.props.method} role={this.props.role} className={this.props.className} id={this.props.id} >
				{this.props.children}
			</form>
					);
	}
}

Form.propTypes = {
	/**
	* id: id of the element
	*/
	id: PropTypes.string,
	/**
	* className: class of the element
	*/
	className: PropTypes.string,
	/**
	* role: role of the element
	*/
	role: PropTypes.string,
	/**
	* method: method of the element
	*/
	method: PropTypes.string,
	/**
	* action: action of the element
	*/
	action: PropTypes.string
}