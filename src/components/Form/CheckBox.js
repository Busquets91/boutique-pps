import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Basic/Input';

/**
 * General description:
 * Basic checkbox element that generate an input
 */
export default class CheckBox extends React.Component {
	render() {
		return (
			<div className="checkbox">
				<label>
					<Input type="checkbox" id={this.props.id} />{ this.props.children }
				</label>
			</div>
		);
	}
}

CheckBox.propTypes = {
	/**
	* id: id of the element
	*/
	id: PropTypes.string
}