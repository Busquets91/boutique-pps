import React from 'react';

import Content from '../Basic/Content';
import Container from '../Basic/Container';
import Tree from '../Basic/Tree';
import Col from '../Basic/Col';
import Link from '../Basic/Link';
import TitleH1 from '../Basic/TitleH1';
import TitleH3 from '../Basic/TitleH3';
import TitleH4 from '../Basic/TitleH4';
import Paragraph from '../Basic/Paragraph';
import CartItems from '../Basic/CartItems';
import SummaryItems from '../Basic/SummaryItems';
import Span from '../Basic/Span';
import Box from '../Basic/Box';
import BoxHeader from '../Basic/BoxHeader';
import BoxFooter from '../Basic/BoxFooter';
import InputGroup from '../Basic/InputGroup';
import Form from '../Basic/Form';
import Input from '../Basic/Input';
import Button from '../Basic/Button';
import I from '../Basic/I';
import Div from '../Basic/Div';


export default class Cart extends React.Component {
	render() {
		const path = [{ id: 1, object: <Link href="/">Accueil</Link> },
		{ id: 2, object: "Panier" }];

		const header = [{id: 1, colspan: "2", value: "Produit"},
		{id: 2, value: "Quantité"}, 
		{id: 3, value: "Prix Unitaire"}, 
		{id: 4, value: "Réduction"}, 
		{id: 5, colspan: "2", value: "Total"}];

		const items = [{id: 1, href: "#", imageSrc: "img/detailsquare.jpg", imageAlt: "Sweat PPS", name: "Sweat PPS - Edition limitée", quantity: "2", price: "40.00€", sale: "10.00€", finalPrice: "30.00€"},
		{id: 2, href:"#", imageSrc: "img/detailsquare1.jpg", imageAlt: "Casquette Giants SF", name: "Casquette Gients SF", quantity: "1", price: "10.00€", sale: "0.00€", finalPrice: "10.00€"}];

		const footer = [{id: 1, colspan: "5", value: "Total"},
		{id: 2, colspan: "2", value: "40.00€"}];

		const summaryItems = [{id: 1, value: "Total commande", header: "50.00€"},
		{id: 2, value: "Réduction BIPS", header: "-10.00€"},
		{id: 3, value: "Total", header: "40.00€", className: "total"}];

		return (
			<Content>
				<Container>
					<Tree path={path} />
					<Col type="md" size="9" id="basket">
						<Box>
							<Form action="#">
								<TitleH1>
									Panier
								</TitleH1>
								<Paragraph className="text-muted">
									Vous avez actuellement 3 articles dans votre panier.
								</Paragraph>
								<CartItems className="table-responsive" tableClassName="table" listItem={items} listHeader={header} listFooter={footer}/>
							</Form>

							<BoxFooter>
								<Div className="pull-left">
									<Link href="#" className="btn btn-default"><I className="fa fa-chevron-left"></I>Continuer mes achats</Link>
								</Div>
								<Div className="pull-right">
									<Button className="btn btn-default"><I className="fa fa-refresh"></I>Rafraichir</Button>
									<Button className="btn btn-primary" type="submit">Valider le panier<I className="fa fa-chevron-right"></I></Button>
								</Div>
							</BoxFooter>
						</Box>
					</Col>
					<Col type="md" size="3">
						<Box id="order-summary">
							<BoxHeader>
								<TitleH3>
									Résumé
								</TitleH3>
							</BoxHeader>
							<Paragraph className="text-muted">
								Le montant est à régle par CB ou bien directement auprès de votre respo Boutique.
							</Paragraph>

							<SummaryItems className="table-responsive" tableClassName="table" listItem={summaryItems}/>
						</Box>

						<Box>
							<BoxHeader>
								<TitleH4>
									Adhérent BIPS
								</TitleH4>
							</BoxHeader>
							<Paragraph className="text-muted">
								Si vous étes adhérent BIPS entrez votre adresse-email ici.
							</Paragraph>
							<Form>
								<InputGroup>
									<Input type="text" className="form-control"></Input>
									<Span className="input-group-btn">
										<Button className="btn btn-primary" type="button"><I className="fa fa-gift"></I></Button>
									</Span>
								</InputGroup>
							</Form>
						</Box>
					</Col>
				</Container>
			</Content>
		);
	}
}