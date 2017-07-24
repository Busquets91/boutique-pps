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


export default class Shop extends React.Component {
	render() {
		const items = [{ id: 1, src_front: "/img/product1.jpg", src_back: "/img/product1_2.jpg", name: "Super déguisement toilettes", price: "17" },
		{ id: 2, src_front: "/img/product1.jpg", src_back: "/img/product1_2.jpg", name: "Super déguisement toilettes", price: "17", oldPrice: "22", sale: "1" },
		{ id: 3, src_front: "/img/product1.jpg", src_back: "/img/product1_2.jpg", name: "Super déguisement toilettes", price: "17", new: "1" },
		{ id: 4, src_front: "/img/product1.jpg", src_back: "/img/product1_2.jpg", name: "Super déguisement toilettes", price: "17" },
		{ id: 5, src_front: "/img/product1.jpg", src_back: "/img/product1_2.jpg", name: "Super déguisement toilettes", price: "17" },
		{ id: 6, src_front: "/img/product1.jpg", src_back: "/img/product1_2.jpg", name: "Super déguisement toilettes", price: "17" },
		{ id: 7, src_front: "/img/product1.jpg", src_back: "/img/product1_2.jpg", name: "Super déguisement toilettes", price: "17" },
		{ id: 8, src_front: "/img/product1.jpg", src_back: "/img/product1_2.jpg", name: "Super déguisement toilettes", price: "17", href: "item/id" }];


		const filters = [{ id: 1, title: "Type", values: [{ id: 1, title: "T-shirt" }, { id: 2, title: "Sweat" }, { id: 3, title: "Jogging" }] },
		{ id: 2, title: "Couleur", values: [{ id: 1, title: "Bleu" }, { id: 2, title: "Blanc" }, { id: 3, title: "Rouge" }] },
		{ id: 3, title: "Taille", values: [{ id: 1, title: "S" }, { id: 2, title: "M" }, { id: 3, title: "L" }] }];


		const pageValue = [{ id: 1, className: "btn btn-default btn-sm btn-primary", value: "12" },
		{ id: 2, className: "btn btn-default btn-sm", value: "24" },
		{ id: 3, className: "btn btn-default btn-sm", value: "All" }];

		const selectOptions = [{ id: 1, object: "Prix" },
		{ id: 2, object: "Nom" },
		{ id: 3, object: "En promotion" }];

		const path = [{ id: 1, object: <Link href="/">Accueil</Link> },
			{ id: 2, object: "Catalogue" }];

		return (
			<Content>
				<Container>
					<Tree path={path} />
					<Col type="md" size="3">
						<Filter filters={filters}/>
					</Col>
					<Col type="md" size="9">
						<Option itemPerPage="12" totalItem="56" pageValue={pageValue} selectOptions={selectOptions} />
						<Catalog listItem={items}/>
						<Pagination activePage={1} nbPages="7" />
					</Col>
				</Container>
			</Content>
		);
	}
}
