import React from 'react';
import PropTypes from 'prop-types';

/**
 * General description:
 * InputGroup is a special span that contains input
 */
export default class SpanInputGroup extends React.Component {
	render() {
		return (
			<span className="input-group-btn" id={this.props.id}>
				{this.props.children}
			</span>
		);
	}
}

SpanInputGroup.propTypes = {
	/**
	* id: id of the element
	*/
	id: PropTypes.string
}