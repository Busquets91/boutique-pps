import React from 'react';
import PropTypes from 'prop-types';


/**
 * General description:
 * Special form element that generate a division for a form
 */
export default class FormGroup extends React.Component {
	render() {
		return (
			<div className="form-group" id={this.props.id} >
				{this.props.children}
			</div>
		);
	}
}

FormGroup.propTypes = {
	/**
	* id: id of the element
	*/
	id: PropTypes.string
}