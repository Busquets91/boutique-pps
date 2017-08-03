import React from 'react';
import PropTypes from 'prop-types';

/**
 * General description:
 * Generate a list of option based on a given list
 */
export default class Select extends React.Component {
	render() {
		return (
			<select className={this.props.className} name={this.props.name} id={this.props.id}>
				{this.props.list.map((item) =>
					<option className={item.className} key={item.id}>
						{item.object}
					</option>
				)}
			</select>
		);
	}
}

Select.propTypes = {
	/**
	* id: if of the list
	*/
	id: PropTypes.string,
	/**
	* className: clas of the list
	*/
	className: PropTypes.string,
	/**
	* list: Array of items to render in the list
	* id is the key
	* object is the text
	* className is the class 
	*/
	list: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		object: PropTypes.string,
		className: PropTypes.string
	}))
}