import React from 'react';
import PropTypes from 'prop-types';


/**
 * General description:
 * Icon is a basic <i> balise that display an icon
 */
export default class Icon extends React.Component {

	render() {
		return (
			<i className={this.props.className} id={this.props.id} >
				{this.props.children}
			</i>
	);
	}
}

Icon.propTypes = {
	/**
	* id: id of the element
	*/
	id: PropTypes.string,
	/**
	* className: class of the element
	*/
	className: PropTypes.string
}