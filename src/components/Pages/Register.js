import React from 'react';

import Content from '../Basic/Content';
import Container from '../Basic/Container';
import Tree from '../Basic/Tree';
import Col from '../Basic/Col';
import Link from '../Basic/Link';
import RegisterBlock from '../Basic/RegisterBlock';
import LoginBlock from '../Basic/LoginBlock';
import TitleH1 from '../Basic/TitleH1';


export default class Register extends React.Component {
	render() {
		const path = [{ id: 1, object: <Link href="/">Accueil</Link> },
		{ id: 2, object: "Inscription" }];
		return (
			<Content>
				<Container>
					<Tree path={path} />
					<Col type="md" size="6">
						<RegisterBlock />
					</Col>
					<Col type="md" size="6">
						<LoginBlock />
					</Col>
				</Container>
			</Content>
		);
	}
}