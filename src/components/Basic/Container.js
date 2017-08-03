import React from 'react';
import PropTypes from 'prop-types';


/**
 * General description:
 * Container is a simple element that render a div with the class "container"
 */
export default class Container extends React.Component {
	render() {
		return (
			<div className="container">
				{this.props.children}
			</div>
		);
	}
}

Container.propTypes = {
	/**
	* id: id of Container Box element
	*/
	id: PropTypes.string
}