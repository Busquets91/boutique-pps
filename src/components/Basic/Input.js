import React from 'react';
import PropTypes from 'prop-types';


/**
 * General description:
 * Input is a basic input balise that create an input with the type given
 */
export default class Icon extends React.Component {

	render() {
		return (
			<input type={this.props.type} className={this.props.className} id={this.props.id} placeholder={this.props.placeholder} value={this.props.value} defaultValue={this.props.defaultValue}/>
		);
	}
}

Icon.propTypes = {
	/**
	* id: id of the element
	*/
	id: PropTypes.string,
	/**
	* className: class of the element
	*/
	className: PropTypes.string,
	/**
	* type: type of the input
	*/
	type: PropTypes.string,
	/**
	* placeholder: text display on the input when empty
	*/
	placeholder: PropTypes.string,
	/**
	* value: value of the field
	*/
	value: PropTypes.string,
	/**
	* defaultValue: default value of the field
	*/
	defaultValue: PropTypes.string
}