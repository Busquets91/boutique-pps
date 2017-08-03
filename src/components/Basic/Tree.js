import React from 'react';
import PropTypes from 'prop-types';

import Col from '../Basic/Col';
import List from '../Basic/List';
import Icon from '../Basic/Icon';

/**
 * General description:
 * Generate a block that indicate where is the user
 */
export default class Tree extends React.Component {
	constructor(props) {
		super(props);
		this.colClass = [{ type: "md", size: 12 }];
	}

	render() {
		return (
			<Col args={this.colClass} >
				<List className="breadcrumb" list={this.props.path}/>
			</Col>
		);
	}
}

Icon.propTypes = {
	/**
	* path: path from home to the given page
	* id: key
	* object: name of the page (can be a Link)
	*/
	path: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		object: PropTypes.string
	}))
}