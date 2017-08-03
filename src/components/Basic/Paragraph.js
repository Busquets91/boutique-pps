import React from 'react';
import PropTypes from 'prop-types';


/**
 * General description:
 * Generate a Paragraph ellement <p>
 */
export default class Paragraph extends React.Component {
	render() {
		return (
			<p className={this.props.className} id={this.props.id}>
				{this.props.children}
			</p>
		);
	}
}

Paragraph.propTypes = {
	/**
	* className: Class of the paragraph
	*/
	className: PropTypes.string,
	/**
	* id: id of the paragraph
	*/
	id: PropTypes.string
}