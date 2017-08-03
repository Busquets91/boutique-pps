import React from 'react';
import PropTypes from 'prop-types';

import Col from '../Basic/Col';
import Icon from '../Basic/Icon';
import Title from '../Basic/Title';
import Link from '../Basic/Link';
import Paragraph from '../Basic/Paragraph';


/**
 * General description:
 * Frame is a component that display nicely an information from an icon, a title and a text
 */
export default class Frame extends React.Component {
	constructor(props) {
		super(props);
		this.colClass = [{ type: "sm", size: this.props.sizeCol }];
	}

	render() {
		return (
			<Col args={this.colClass}>
				<div className="box same-height clickable">
					<div className="icon">
						<Icon className={this.props.item.icon} />
					</div>
					<Title level={3}>
						<Link href={this.props.item.href}>
							{this.props.item.title}
						</Link>
					</Title>
					<Paragraph>
						{this.props.item.text}
					</Paragraph>
				</div>
			</Col>
		);
	}
}

Frame.propTypes = {
	/**
	* sizeCol: size of the element
	*/
	sizeCol: PropTypes.number,
	/**
	* icon: class of the icon
	*/
	icon: PropTypes.string,
	/**
	* href: link to the article
	*/
	href: PropTypes.string,
	/**
	* text: content of the frame
	*/
	text: PropTypes.string
}