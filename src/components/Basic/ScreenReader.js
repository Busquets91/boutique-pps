import React from 'react';
import PropTypes from 'prop-types';

/**
 * General description:
 * ScreenReader is a basic element that create a div that is only displayed on screenreader
 */
export default class ScreenReader extends React.Component {
	render() {
		return (
			<div className="sr-only" id={this.props.id}>
				{this.props.children}
			</div>
		);
	}
}

ScreenReader.propTypes = {
	/**
	* id: id of the element
	*/
	id: PropTypes.string
}