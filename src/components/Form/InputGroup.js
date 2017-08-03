import React from 'react';
import PropTypes from 'prop-types';


/**
 * General description:
 * InputGroup is a special div that contains input
 */
export default class InputGroup extends React.Component {
	render() {
		return (
			<div className="input-group" id={this.props.id}>
				{this.props.children}
			</div>
		);
	}
}

InputGroup.propTypes = {
	/**
	* id: id of the element
	*/
	id: PropTypes.string
}