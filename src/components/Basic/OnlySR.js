import React from 'react';
import PropTypes from 'prop-types';


/**
 * General description:
 * This element is used to hide information intended only for screen readers from the layout of the rendered page.
 */
export default class OnlySR extends React.Component {
	render() {
		return (
			<span className="sr-only" id={this.props.id} >
				{this.props.children}
			</span>
		);
	}
}

OnlySR.propTypes = {
	/**
	* id: id of the element
	*/
	id: PropTypes.string
}