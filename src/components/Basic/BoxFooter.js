import React from 'react';
import PropTypes from 'prop-types';

/**
 * General description:
 * BoxFooter is a simple element that render a div with the class "box-footer"
 */
export default class BoxFooter extends React.Component {
	render() {
		return (
			<div className="box-footer" id={this.props.id} >
				{this.props.children}
			</div>
		);
	}
}

BoxFooter.propTypes = {
	/**
	* id: id of the BoxFooter element
	*/
	id: PropTypes.string
}