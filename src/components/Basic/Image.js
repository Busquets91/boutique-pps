import React from 'react';
import PropTypes from 'prop-types';


/**
 * General description:
 * Image is a basic <img> balise that display a given image
 */
export default class Image extends React.Component {
	render() {
		return (
			<img src={this.props.src} alt={this.props.alt} className={this.props.className} id={this.props.id}/>
		);
	}
}

Image.propTypes = {
	/**
	* id: id of the element
	*/
	id: PropTypes.string,
	/**
	* className: class of the element
	*/
	className: PropTypes.string,
	/**
	* src: path of the image
	*/
	src: PropTypes.string,
	/**
	* alt: text to display when the image is not loaded
	*/
	alt: PropTypes.string
}