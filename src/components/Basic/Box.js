import React from 'react';
import PropTypes from 'prop-types';

/**
 * General description:
 * Box is a simple element that render a div with the class "box"
 */
export default class Box extends React.Component {
	render() {
		return (
			<div className="box" id={this.props.id} >
				{this.props.children}
			</div>
		);
	}
}

Box.propTypes = {
	/**
	* id: id of the element
	*/
	id: PropTypes.string
}