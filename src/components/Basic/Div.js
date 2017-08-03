import React from 'react';
import PropTypes from 'prop-types';


/**
 * General description:
 * Div is a simple element that render a simple div
 */
export default class Div extends React.Component {
	render() {
		return (
			<div className={this.props.className} id={this.props.id} >
				{this.props.children}
			</div>
		);
	}
}

Div.propTypes = {
	/**
	* id: id of div
	*/
	id: PropTypes.string,
	/**
	* className: class of the div
	*/
	className: PropTypes.string

}