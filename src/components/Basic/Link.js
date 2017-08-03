import React from 'react';
import PropTypes from 'prop-types';


/**
 * General description:
 * Link is an html link <a> element
 */
export default class Link extends React.Component {
	render() {
		return (
			<a href={this.props.href} className={this.props.className} data-toggle={this.props.dataToggle} data-target={this.props.dataTarget} id={this.props.id}>
				{this.props.children}
			</a>
		);
	}
}

Link.propTypes = {
	/**
	* id: id of the Button
	*/
	id: PropTypes.string,
	/**
	* dataTarget: id of the target of the Button
	*/
	dataTarget: PropTypes.string,
	/**
	* dataToggle: event type attach to the Button
	*/
	dataToggle: PropTypes.string,
	/**
	* href: link of the element
	*/
	href: PropTypes.string,
	/**
	* className: class of the Button
	*/
	className: PropTypes.string
}