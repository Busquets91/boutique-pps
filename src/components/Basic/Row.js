import React from 'react';
import PropTypes from 'prop-types';


/**
 * General description:
 * Row is a basic div with Row as class
 */
export default class Row extends React.Component {
	render() {
		return (
			<div className="row" id={this.props.id} >
				{this.props.children}
			</div>
		);
	}
}

Row.propTypes = {
	/**
	* id: id of the element
	*/
	id: PropTypes.string
}