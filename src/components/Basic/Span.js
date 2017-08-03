import React from 'react';
import PropTypes from 'prop-types';

/**
 * General description:
 * Span is a basic <spab> balise that display a span div
 */
export default class Span extends React.Component {
	render() {
		return (
			<span className={this.props.className} id={this.props.id} >
				{this.props.children}
			</span>
		);
	}
}

Span.propTypes = {
	/**
	* id: id of the element
	*/
	id: PropTypes.string,
	/**
	* className: class of the element
	*/
	className: PropTypes.string
}