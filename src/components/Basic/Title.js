import React from 'react';
import PropTypes from 'prop-types';

/**
 * General description:
 * Display a title element with the given level
 */
export default class Title extends React.Component {
	render() {
		if (this.props.level === 1) {
			return (
				<h1 className={this.props.className} id={this.props.id}>
					{this.props.children}
				</h1>
			);
		}
		if (this.props.level === 2) {
			return (
				<h2 className={this.props.className} id={this.props.id}>
					{this.props.children}
				</h2>
			);
		}
		if (this.props.level === 3) {
			return (
				<h3 className={this.props.className} id={this.props.id}>
					{this.props.children}
				</h3>
			);
		}
		if (this.props.level === 4) {
			return (
				<h4 className={this.props.className} id={this.props.id}>
					{this.props.children}
				</h4>
			);
		}
	}
}

Title.propTypes = {
	/**
	* id: id of the element
	*/
	id: PropTypes.string,
	/**
	* className: class of the element
	*/
	className: PropTypes.string,
	/**
	* level: level of the title
	*/
	level: PropTypes.oneOf([1,2,3,4])
}