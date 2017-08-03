import React from 'react';

import Content from '../Basic/Content';
import Container from '../Basic/Container';
import Tree from '../Basic/Tree';
import Col from '../Basic/Col';
import Link from '../Basic/Link';
import RegisterBlock from '../Basic/RegisterBlock';
import LoginBlock from '../Basic/LoginBlock';
import NavBar from '../NavBar/Navbar';


export default class Register extends React.Component {
	constructor(props) {
		super(props);

		const { location } = this.props;

		this.path = [{ id: 1, object: <Link href="/">Accueil</Link> },
			{ id: 2, object: "Inscription" }];

		this.colClass = [{ type: "md", size: 6 }];

		this.itemMenu = [
			{ id: 1, className: (location.pathname === "/" ? "active" : ""), object: <Link href="/" className="active">Accueil</Link> },
			{ id: 2, className: (location.pathname.match(/^\/shop/) || location.pathname.match(/^\/item/) ? "active" : ""), object: <Link href="/shop">Catalogue</Link> },
			{ id: 3, className: (location.pathname.match(/^\/info/) ? "active" : ""), object: <Link href="/info">Infos</Link> },
			{ id: 4, object: <Link href="#" dataToggle="modal" dataTarget="#login-modal">Connexion</Link> },
			{ id: 5, className: (location.pathname.match(/^\/register/) ? "active" : ""), object: <Link href="/register">Inscription</Link> }
		];
	}

	render() {
		return (
			<div>
				<NavBar itemMenu={this.itemMenu} />
				<Content>
					<Container>
						<Tree path={this.path} />
						<Col args={this.colClass}>
							<RegisterBlock />
						</Col>
						<Col args={this.colClass}>
							<LoginBlock />
						</Col>
					</Container>
				</Content>
			</div>
		);
	}
}