import React from 'react';
import PropTypes from 'prop-types';

/**
 * General description:
 * Content is a simple element that render a div with the class "content"
 */
export default class Content extends React.Component {
	render() {
		return (
			<div id="content" className={this.props.className} >
				{this.props.children}
			</div>
		);
	}
}

Content.propTypes = {
	/**
	* className: class of the element
	*/
	className: PropTypes.string
}