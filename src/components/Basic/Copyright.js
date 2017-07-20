import React from 'react';


import Col from '../Basic/Col';
import Paragraph from '../Basic/Paragraph';
import Container from '../Basic/Container';
import { Link } from 'react-router-dom';


export default class Copyright extends React.Component {
	render() {
		return (
			<div id="copyright">
				<Container>
					<Col type="md" size="6">
						<Paragraph className="pull-left">
							{this.props.team}
						</Paragraph>
					</Col>
					<Col type="md" size="6">
						<Paragraph className="pull-right">
							{this.props.children}
						</Paragraph>
					</Col>
				</Container>
			</div>
		);
	}
}