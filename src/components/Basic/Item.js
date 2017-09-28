import React from 'react';

import Link from '../Basic/Link';
import Image from '../Basic/Image';
import Paragraph from '../Basic/Paragraph';
import Title from '../Basic/Title';
import Ribbon from '../Basic/Ribbon';
import Icon from '../Basic/Icon';


export default class Item extends React.Component {
	constructor(props) {
		super(props);

		this.ribbons = [];
		var i = 1;
		if ("sale" in this.props.item) {
			this.ribbons.push({ id: i, type: "sale" });
			i++;
		}
		if ("new" in this.props.item) {
			this.ribbons.push({ id: i, type: "new" });
		}

		if ("oldPrice" in this.props.item) {
			this.price = <Paragraph className="price"><del>{this.props.item.oldPrice}</del> {this.props.item.price}€</Paragraph>;
		}
		else {
			this.price = <Paragraph className="price">{this.props.item.price}€</Paragraph>;
		}
	}

	render() {
		return (
			<div className={this.props.className} >
				<div className="product">
					<div className="flip-container">
						<div className="flipper">
							<div className="front">
								<Link href="/item/5">
									<Image src={this.props.item.src_front} alt={this.props.item.name} className="img-responsive"/>
                                </Link>
                            </div>
							<div className="back">
								<Link href="/item/5">
									<Image src={this.props.item.src_back} alt={this.props.item.name} className="img-responsive"/>
								</Link>
							</div>
						</div>
					</div>
					<Link href={this.props.item.href} class="invisible">
						<Image src={this.props.item.src_front} alt={this.props.item.name} className="img-responsive"/>
                    </Link>
					<div className="text">
						<Title level={3}>
							<Link href={this.props.item.href}>
								{this.props.item.name}
							</Link>
						</Title>
						{this.price}
						{this.props.haveBtn ?
							<Paragraph className="buttons">
								<Link href={this.props.itemhref} className="btn btn-default">Voir détails</Link>&nbsp;
								<Link href="#" className="btn btn-primary"><Icon className="fa fa-shopping-cart"/>Ajouter</Link>
							</Paragraph>
							: null}
					</div>
					{this.ribbons.map((item) => 
						<Ribbon key={item.id} type={item.type}/>
					)}
				</div>
			</div>
		);
	}
}