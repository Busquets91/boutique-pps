import React from 'react';

import Box from '../Basic/Box';
import Row from '../Basic/Row';
import Col from '../Basic/Col';
import Image from '../Basic/Image';
import Ribbon from '../Basic/Ribbon';
import TitleH1 from '../Basic/TitleH1';
import Paragraph from '../Basic/Paragraph';
import Link from '../Basic/Link';
import Icon from '../Basic/Icon';

export default class ImageItem extends React.Component {
	render() {
		return (
				<Row id="productMain">
					<Col type="sm" size="6">
						<div id="mainImage">
							<Image src="/img/detailsquare.jpg" alt="" className="img-responsive" />
						</div>
						<Ribbon type="sale" />
						<Ribbon type="new" />
					</Col>
					<Col type="sm" size="6">
						<Box>
							<TitleH1 className="text-center">
								Sweat PPS
							</TitleH1>
							<Paragraph className="goToDescription">
								<Link href="#details" className="scroll-to">
									Aller au détail du produit
								</Link>
							</Paragraph>
							<Paragraph className="price">
								50.00€
							</Paragraph>
							<Paragraph className="text-center buttons">
								<Link href="basket.html" class="btn btn-primary"><Icon className="fa fa-shopping-cart" /> Ajouter au panier</Link>
							</Paragraph>
						</Box>
						<Row id="thumbs">
							<Col type="xs" size="4">
								<Link href="/img/detailsquare.jpg" className="thumb">
									<Image src="/img/detailsquare.jpg" alt="" className="img-responsive" />
								</Link>
							</Col>
							<Col type="xs" size="4">
								<Link href="/img/detailsquare2.jpg" class="thumb">
								<Image src="/img/detailsquare2.jpg" alt="" className="img-responsive" />
								</Link>
							</Col>
							<Col type="xs" size="4">
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