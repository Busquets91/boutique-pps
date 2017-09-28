import React from 'react';

import Content from '../Basic/Content';
import Container from '../Basic/Container';
import Tree from '../Basic/Tree';
import Col from '../Basic/Col';
import Filter from '../Basic/Filter';
import Option from '../Basic/Option';
import Pagination from '../Basic/Pagination';
import Catalog from '../Basic/Catalog';
import Link from '../Basic/Link';
import NavBar from '../NavBar/Navbar';


export default class Shop extends React.Component {
	constructor(props) {
		super(props);

		const { location } = this.props;

		this.items = [{ id: 1, src_front: "/img/product1.jpg", src_back: "/img/product1_2.jpg", name: "Super déguisement toilettes", price: 17 },
		{ id: 2, src_front: "/img/product1.jpg", src_back: "/img/product1_2.jpg", name: "Super déguisement toilettes", price: 17, oldPrice: 22, sale: true },
		{ id: 3, src_front: "/img/product1.jpg", src_back: "/img/product1_2.jpg", name: "Super déguisement toilettes", price: 17, new: true },
		{ id: 4, src_front: "/img/product1.jpg", src_back: "/img/product1_2.jpg", name: "Super déguisement toilettes", price: 17 },
		{ id: 5, src_front: "/img/product1.jpg", src_back: "/img/product1_2.jpg", name: "Super déguisement toilettes", price: 17 },
		{ id: 6, src_front: "/img/product1.jpg", src_back: "/img/product1_2.jpg", name: "Super déguisement toilettes", price: 17 },
		{ id: 7, src_front: "/img/product1.jpg", src_back: "/img/product1_2.jpg", name: "Super déguisement toilettes", price: 17 },
		{ id: 8, src_front: "/img/product1.jpg", src_back: "/img/product1_2.jpg", name: "Super déguisement toilettes", price: 17, href: "item/id" }];


		this.filters = [{ id: 1, title: "Type", values: [{ id: 1, title: "T-shirt" }, { id: 2, title: "Sweat" }, { id: 3, title: "Jogging" }] },
		{ id: 2, title: "Couleur", values: [{ id: 1, title: "Bleu" }, { id: 2, title: "Blanc" }, { id: 3, title: "Rouge" }] },
		{ id: 3, title: "Taille", values: [{ id: 1, title: "S" }, { id: 2, title: "M" }, { id: 3, title: "L" }] }];


		this.pageValue = [{ id: 1, className: "btn btn-default btn-sm btn-primary", value: "12" },
		{ id: 2, className: "btn btn-default btn-sm", value: "24" },
		{ id: 3, className: "btn btn-default btn-sm", value: "All" }];

		this.selectOptions = [{ id: 1, object: "Prix" },
		{ id: 2, object: "Nom" },
		{ id: 3, object: "En promotion" }];

		this.path = [{ id: 1, object: <Link href="/">Accueil</Link> },
			{ id: 2, object: "Catalogue" }];

		this.colClass3 = [{ type: "md", size: 3 }];
		this.colClass9 = [{ type: "md", size: 9 }];

		this.argsItem = [{ type: "md", size: 4 }, { type: "sm", size: 6 }];

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
						<Col args={this.colClass3} >
							<div>
								{this.filters.map((item) =>
									<Filter filter={item} key={item.id} />
								)}
							</div>
						</Col>
						<Col args={this.colClass9} >
							<Option itemPerPage="12" totalItem="56" pageValue={this.pageValue} selectOptions={this.selectOptions} />
							<Catalog listItem={this.items} args={this.argsItem}/>
							<Pagination activePage={1} nbPages="7" />
						</Col>
					</Container>
				</Content>
			</div>
		);
	}
}
