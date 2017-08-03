import React from 'react';
import PropTypes from 'prop-types';


/**
 * General description:
 * Generate an <ul> list
 */
export default class List extends React.Component {
	render() {
		return (
			<ul className={this.props.className} >
				{this.props.list.map((item) =>
					<li className={item.className} key={item.id}>
						{item.object}
					</li>
				)}
			</ul>
		);
	}
}

List.propTypes = {
	/**
	* className: Class of the ul
	*/
	className: PropTypes.string,
	/**
	* list: Array of the item to display
	* id is the key
	* className is the class of each li element
	* object is the object to render
	*/
	list: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		className: PropTypes.string,
		object: PropTypes.oneOfType([
			PropTypes.object,
			PropTypes.string
		])
	}))
}