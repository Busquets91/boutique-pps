import React from 'react';

import Content from '../Basic/Content';
import Tree from '../Basic/Tree';
import Col from '../Basic/Col';
import DescItem from '../Basic/DescItem';
import ImageItem from '../Basic/ImageItem';
import Link from '../Basic/Link';
import Container from '../Basic/Container';
import NavBar from '../NavBar/Navbar';



export default class Detail extends React.Component {
	constructor(props) {
		super(props);

		const { location } = this.props;

		this.path = [{ id: 1, object: <Link href="/">Accueil</Link> },
		{ id: 2, object: <Link href="/shop">Catalogue</Link> },
		{ id: 3, object: "Sweat PPS" }];

		this.entretien = [{ id: 1, object: "55% Cotton, 45% Polyester" },
		{ id: 2, object: "Laver à froid, seulement avec les couleurs" }];

		this.size = [{ id: 1, object: "Coupe regular" }];

		this.title = "Super sweat whou";

		this.desc = "SUper lmoqsc sdjnjds jdsjs lq kjsdhds a dsfij z dsjk sddc ,k,csd ijsfpdkfjlsdjfmsdjfsjdfmojkd dkfjslmdfdmjfpmd";

		this.colClass = [{ type: "md", size: 126 }];

		this.quote = "Vraiment super ce pull. Depuis que je l'ai, j'arrête pas de pécho !";

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
							<ImageItem />
							<DescItem size={this.size} maint={this.entretien} title={this.title} desc={this.desc} quote={this.quote} />
						</Col>
					</Container>
				</Content>
			</div>
		);
	}
}