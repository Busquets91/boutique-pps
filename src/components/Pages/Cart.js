import React from 'react';

import Content from '../Basic/Content';
import Container from '../Basic/Container';
import Tree from '../Basic/Tree';
import Col from '../Basic/Col';
import Link from '../Basic/Link';
import Title from '../Basic/Title';
import Paragraph from '../Basic/Paragraph';
import CartItems from '../Basic/CartItems';
import SummaryItems from '../Basic/SummaryItems';
import Span from '../Basic/Span';
import Box from '../Basic/Box';
import BoxHeader from '../Basic/BoxHeader';
import BoxFooter from '../Basic/BoxFooter';
import InputGroup from '../Form/InputGroup';
import Form from '../Basic/Form';
import Input from '../Basic/Input';
import Button from '../Basic/Button';
import Icon from '../Basic/Icon';
import NavBar from '../NavBar/Navbar';

/**
 * General description:
 * Cart page
 */
export default class Cart extends React.Component {
	constructor(props) {
		super(props);

		const { location } = this.props;

		this.path = [{ id: 1, object: <Link href="/">Accueil</Link> },
		{ id: 2, object: "Panier" }];

		this.header = [{ id: 1, colspan: "2", value: "Produit" },
		{ id: 2, value: "Quantité" },
		{ id: 3, value: "Prix Unitaire" },
		{ id: 4, value: "Réduction" },
		{ id: 5, colspan: "2", value: "Total" }];

		this.items = [{ id: 1, href: "#", imageSrc: "img/detailsquare.jpg", imageAlt: "Sweat PPS", name: "Sweat PPS - Edition limitée", quantity: "2", price: "40.00€", sale: "10.00€", finalPrice: "30.00€" },
		{ id: 2, href: "#", imageSrc: "img/detailsquare1.jpg", imageAlt: "Casquette Giants SF", name: "Casquette Gients SF", quantity: "1", price: "10.00€", sale: "0.00€", finalPrice: "10.00€" }];

		this.footer = [{ id: 1, colspan: "5", value: "Total" },
		{ id: 2, colspan: "2", value: "40.00€" }];

		this.summaryItems = [{ id: 1, value: "Total commande", header: "50.00€" },
		{ id: 2, value: "Réduction BIPS", header: "-10.00€" },
		{ id: 3, value: "Total", header: "40.00€", className: "total" }];

		this.colClass9 = [{ type: "md", size: 9 }];
		this.colClass3 = [{ type: "md", size: 3 }];

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
						<Col args={this.colClass9} id="basket">
							<Box>
								<Form action="#">
									<Title level={1}>
										Panier
									</Title>
									<Paragraph className="text-muted">
										Vous avez actuellement 3 articles dans votre panier.
									</Paragraph>
									<CartItems className="table-responsive" tableClassName="table" listItem={this.items} listHeader={this.header} listFooter={this.footer}/>
								</Form>

								<BoxFooter>
									<div className="pull-left">
										<Link href="#" className="btn btn-default">
											<Icon className="fa fa-chevron-left" />Continuer mes achats
										</Link>
									</div>
									<div className="pull-right">
										<Button className="btn btn-default">
											<Icon className="fa fa-refresh" />Rafraichir
										</Button>
										<Button className="btn btn-primary" type="submit">
											Valider le panier<Icon className="fa fa-chevron-right" />
										</Button>
									</div>
								</BoxFooter>
							</Box>
						</Col>
						<Col args={this.colClass3}>
							<Box id="order-summary">
								<BoxHeader>
									<Title level={3}>
										Résumé
									</Title>
								</BoxHeader>
								<Paragraph className="text-muted">
									Le montant est à régle par CB ou bien directement auprès de votre respo Boutique.
								</Paragraph>

								<SummaryItems className="table-responsive" tableClassName="table" listItem={this.summaryItems}/>
							</Box>

							<Box>
								<BoxHeader>
									<Title level={4}>
										Adhérent BIPS
									</Title>
								</BoxHeader>
								<Paragraph className="text-muted">
									Si vous étes adhérent BIPS entrez votre adresse-email ici.
								</Paragraph>
								<Form>
									<InputGroup>
										<Input type="text" className="form-control"/>
										<Span className="input-group-btn">
											<Button className="btn btn-primary" type="button">
												<Icon className="fa fa-gift" />
											</Button>
										</Span>
									</InputGroup>
								</Form>
							</Box>
						</Col>
					</Container>
				</Content>
			</div>
		);
	}
}