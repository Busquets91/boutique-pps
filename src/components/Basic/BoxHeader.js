import React from 'react';
import PropTypes from 'prop-types';

/**
 * General description:
 * BoxHeader is a simple element that render a div with the class "box-header"
 */
export default class BoxHeader extends React.Component {
	render() {
		return (
			<div className="box-header" id={this.props.id} >
				{this.props.children}
			</div>
		);
	}
}

BoxHeader.propTypes = {
	/**
	* id: id of the BoxHeader element
	*/
	id: PropTypes.string
}