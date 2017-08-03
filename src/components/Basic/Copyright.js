import React from 'react';
import PropTypes from 'prop-types';


import Col from '../Basic/Col';
import Paragraph from '../Basic/Paragraph';
import Container from '../Basic/Container';

/**
 * General description:
 * Copyright is a component that allow you to diplay a a nice footer with a team and a text
 */
export default class Copyright extends React.Component {
	constructor(props) {
		super(props);
		this.colClass = [{ type: "md", size: 6 }];
	}

	render() {
		return (
			<div id="copyright">
				<Container>
					<Col args={this.colClass}>
						<Paragraph className="pull-left">
							{this.props.team}
						</Paragraph>
					</Col>
					<Col args={this.colClass}>
						<Paragraph className="pull-right">
							{this.props.children}
						</Paragraph>
					</Col>
				</Container>
			</div>
		);
	}
}

Copyright.propTypes = {
	/**
	* team: name of the team that created the website
	*/
	team: PropTypes.string
}