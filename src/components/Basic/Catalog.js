import React from 'react';
import PropTypes from 'prop-types';

import Item from '../Basic/Item';

/**
 * General description:
 * Catalog is a component that is generating a list of item.
 */
export default class Catalog extends React.Component {
	constructor(props) {
		super(props);
		this.className = "";
		for (var i = 0; i < this.props.args.length; i++) {
			this.className += " col-" + this.props.args[i].type + "-" + this.props.args[i].size;
		}
	}

	render() {
		return (
			<div className="row products">
				{this.props.listItem.map((item) =>
					<Item key={item.id} item={item} className={this.className} haveBtn={true}/>
				)}
			</div>
		);
	}
}

Catalog.propTypes = {
	/**
	* id: id of the element
	*/
	id: PropTypes.string,
	/**
	* args: array of type of device (md, sd ...) and size for the number of column 
	*/
	args: PropTypes.arrayOf(PropTypes.shape({
		type: PropTypes.string,
		size: PropTypes.number
	})),
	/**
	* listItem: array of item:
	*	id: key
	*	src_front: image default
	*	src_back: image on hover
	*	name: name of the product
	*	price: price of the product
	*	oldPrice: old price when sale
	*	sale: is a sale
	*	new: is new
	*/
	listItem: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		src_front: PropTypes.string,
		src_back: PropTypes.string,
		name: PropTypes.string,
		price: PropTypes.number,
		oldPrice: PropTypes.number,
		sale: PropTypes.bool,
		new: PropTypes.bool
	}))
}