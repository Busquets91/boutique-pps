import React from 'react';

import Content from '../Basic/Content';
import Container from '../Basic/Container';
import Col from '../Basic/Col';
import Slider from '../Basic/Slider';
import Frame from '../Basic/Frame';
import Item from '../Basic/Item';
import Title from '../Basic/Title';
import NavBar from '../NavBar/Navbar';
import Link from '../Basic/Link';

/**
 * General description:
 * Homepage
 */
export default class Home extends React.Component {
	constructor(props) {
		super(props);

		const { location } = this.props;

		this.images = [{ id: 1, src: "img/main-slider1.jpg", alt: "" },
		{ id: 2, src: "img/main-slider2.jpg", alt: "" },
		{ id: 3, src: "img/main-slider3.jpg", alt: "" },
		{ id: 4, src: "img/main-slider4.jpg", alt: "" }];

		this.items = [{ id: 1, src_front: "img/product1.jpg", src_back: "img/product1_2.jpg", name: "Super déguisement toilettes", price: "17" },
		{ id: 2, src_front: "img/product1.jpg", src_back: "img/product1_2.jpg", name: "Super déguisement toilettes", price: "17", oldPrice: "22", sale: "1" },
		{ id: 3, src_front: "img/product1.jpg", src_back: "img/product1_2.jpg", name: "Super déguisement toilettes", price: "17", new: "1" },
		{ id: 4, src_front: "img/product1.jpg", src_back: "img/product1_2.jpg", name: "Super déguisement toilettes", price: "17" },
		{ id: 5, src_front: "img/product1.jpg", src_back: "img/product1_2.jpg", name: "Super déguisement toilettes", price: "17" },
		{ id: 6, src_front: "img/product1.jpg", src_back: "img/product1_2.jpg", name: "Super déguisement toilettes", price: "17" },
		{ id: 7, src_front: "img/product1.jpg", src_back: "img/product1_2.jpg", name: "Super déguisement toilettes", price: "17" },
		{ id: 8, src_front: "img/product1.jpg", src_back: "img/product1_2.jpg", name: "Super déguisement toilettes", price: "17" }];

		this.cards = [{ id: 1, icon: "fa fa-heart", href: "#", title: "Fier de notre école", text: "Portez fiérement les couleurs marron/or de votre école." },
		{ id: 2, icon: "fa fa-tags", href: "#", title: "Livraison à la MDI", text: "Faites vous livrez votre sweat aux couleurs de votre école directement à la MDI !" },
		{ id: 3, icon: "fa fa-thumbs-up", href: "#", title: "100% sécurisé", text: "Via notre platforme, vous pouvez commander et payer en toute sécurité." }];

		this.colClass = [{ type: "md", size: 12 }];

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
						<Col args={this.colClass}>
							<Slider listImg={this.images} />
						</Col>
					</Container>
					<div id="advantages">
						<Container>
							<div className="same-height-row">
								{this.cards.map((item) =>
									<Frame item={item} key={item.id} sizeCol={4}/>
								)}
							</div>
						</Container>
					</div>
					<div id="hot">
						<div className="box">
							<Container>
								<Col args={this.colClass}>
									<Title level={2}>
										Nouveautés
									</Title>
								</Col>
							</Container>
						</div>
						<Container>
							<div className="product-slider">
								{this.items.map((item) =>
									<Item key={item.id} item={item} className="item" />
								)}
							</div>
						</Container>
					</div>
				</Content>
			</div>
		);
	}
}