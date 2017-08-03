import React from 'react';
import PropTypes from 'prop-types';

import Paragraph from '../Basic/Paragraph';


/**
 * General description:
 * Generate a quote element
 */
export default class Quote extends React.Component {
	render() {
		return (
			<blockquote id={this.id} className={this.className} >
				<Paragraph>
					<em>{this.props.children}</em>
				</Paragraph>
			</blockquote>
	);
	}
}

Quote.propTypes = {
	/**
	* className: Class of the Quote
	*/
	className: PropTypes.string,
	/**
	* id: id of the Quote
	*/
	id: PropTypes.string
}

