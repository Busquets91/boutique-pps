import React from 'react';

import Box from '../Basic/Box';
import Row from '../Basic/Row';
import Col from '../Basic/Col';
import Image from '../Basic/Image';
import Ribbon from '../Basic/Ribbon';
import Title from '../Basic/Title';
import Paragraph from '../Basic/Paragraph';
import Link from '../Basic/Link';
import Icon from '../Basic/Icon';

export default class ImageItem extends React.Component {
	constructor(props) {
		super(props);
		this.colClassSM = [{ type: "sm", size: 6 }];
		this.colClassXS = [{ type: "xs", size: 4 }];
	}

	render() {
		return (
				<Row id="productMain">
					<Col args={this.colClassSM}>
						<div id="mainImage">
							<Image src="/img/detailsquare.jpg" alt="" className="img-responsive" />
						</div>
						<Ribbon type="sale" />
						<Ribbon type="new" />
					</Col>
					<Col args={this.colClassSM}>
						<Box>
							<Title level={1} className="text-center">
								Sweat PPS
							</Title>
							<Paragraph className="goToDescription">
								<Link href="#details" className="scroll-to">
									Aller au détail du produit
								</Link>
							</Paragraph>
							<Paragraph className="price">
								50.00€
							</Paragraph>
							<Paragraph className="text-center buttons">
								<Link href="basket.html" className="btn btn-primary"><Icon className="fa fa-shopping-cart" /> Ajouter au panier</Link>
							</Paragraph>
						</Box>
						<Row id="thumbs">
							<Col args={this.colClassXS}>
								<Link href="/img/detailsquare.jpg" className="thumb">
									<Image src="/img/detailsquare.jpg" alt="" className="img-responsive" />
								</Link>
							</Col>
							<Col args={this.colClassXS}>
								<Link href="/img/detailsquare2.jpg" class="thumb">
								<Image src="/img/detailsquare2.jpg" alt="" className="img-responsive" />
								</Link>
							</Col>
							<Col args={this.colClassXS}>
								<Link href="/img/detailsquare3.jpg" class="thumb">
								<Image src="/img/detailsquare3.jpg" alt="" className="img-responsive" />
								</Link>
							</Col>
						</Row>
					</Col>
				</Row>
		);
	}
}