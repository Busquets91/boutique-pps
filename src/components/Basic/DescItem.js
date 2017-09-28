import React from 'react';
import PropTypes from 'prop-types';

import Box from '../Basic/Box';
import Title from '../Basic/Title';
import Paragraph from '../Basic/Paragraph';
import List from '../Basic/List';
import Quote from '../Basic/Quote';


/**
 * General description:
 * Descitem is a component that is generating the description of an item from the shop
 */
export default class Descitem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Box id="details">
				<Title level={4}>
					{this.props.title}
				</Title>
				<Paragraph>
					{this.props.desc}
				</Paragraph>
				<Title level={4}>
					Matériaux et entretien
				</Title>
				<List list={this.props.maint}/>
				<Title level={4}>
					Taille &Aacute; Coupe
				</Title>
				<List list={this.props.size} />
				<Quote>
					{this.props.quote}
				</Quote>
			</Box>
		);
	}
}

Descitem.propTypes = {
	/**
	* desc: Description of the item
	*/
	desc: PropTypes.string,
	/**
	* quote: Quote from a customer
	*/
	quote: PropTypes.string,
	/**
	* maint: Array of way to maintain the item
	* id is the key
	* object is the text
	*/
	maint: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		object: PropTypes.string
	})),
	/**
	* size:Array of the different size avaiable
	* id is the key
	* object is the size
	*/
	size: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		object: PropTypes.string
	}))
}