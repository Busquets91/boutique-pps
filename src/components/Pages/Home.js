import React from 'react';

import Content from '../Basic/Content';
import Container from '../Basic/Container';
import Col from '../Basic/Col';
import Slider from '../Basic/Slider';
import Cards from '../Basic/Cards';
import Items from '../Basic/Items';


export default class Home extends React.Component {
	render() {
		const images = [{ id: 1, src: "img/main-slider1.jpg", alt: "" },
			{ id: 2, src: "img/main-slider2.jpg", alt: "" }, 
			{ id: 3, src: "img/main-slider3.jpg", alt: "" },
			{ id: 4, src: "img/main-slider4.jpg", alt: "" }];

		const items = [{ id: 1, src_front: "img/product1.jpg", src_back: "img/product1_2.jpg", name: "Super déguisement toilettes", price: "17" },
			{ id: 2, src_front: "img/product1.jpg", src_back: "img/product1_2.jpg", name: "Super déguisement toilettes", price: "17", oldPrice: "22", sale:"1" },
			{ id: 3, src_front: "img/product1.jpg", src_back: "img/product1_2.jpg", name: "Super déguisement toilettes", price: "17", new:"1" },
			{ id: 4, src_front: "img/product1.jpg", src_back: "img/product1_2.jpg", name: "Super déguisement toilettes", price: "17" },
			{ id: 5, src_front: "img/product1.jpg", src_back: "img/product1_2.jpg", name: "Super déguisement toilettes", price: "17" },
			{ id: 6, src_front: "img/product1.jpg", src_back: "img/product1_2.jpg", name: "Super déguisement toilettes", price: "17" },
			{ id: 7, src_front: "img/product1.jpg", src_back: "img/product1_2.jpg", name: "Super déguisement toilettes", price: "17" },
			{ id: 8, src_front: "img/product1.jpg", src_back: "img/product1_2.jpg", name: "Super déguisement toilettes", price: "17" }];

		const cards = [{ id: 1, icon:"fa fa-heart", href: "#", title: "Fier de notre école", text: "Portez fiérement les couleurs marron/or de votre école." },
			{ id: 2, icon: "fa fa-tags", href: "#", title: "Livraison à la MDI", text: "Faites vous livrez votre sweat aux couleurs de votre école directement à la MDI !" },
			{ id: 3, icon: "fa fa-thumbs-up", href: "#", title: "100% sécurisé", text: "Via notre platforme, vous pouvez commander et payer en toute sécurité." }];
		return (
			<Content>
				<Container>
					<Col type="md" size="12">
						<Slider listImg={images} />
					</Col>
				</Container>
				<Cards listCard={cards} />
				<Items listItem={items} />
			</Content>
		);
	}
}