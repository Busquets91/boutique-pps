import React from 'react';


import Link from '../Basic/Link';
import Image from '../Basic/Image';
import Paragraph from '../Basic/Paragraph';
import TitleH3 from '../Basic/TitleH3';
import Ribbon from '../Basic/Ribbon';



export default class Item extends React.Component {
	render() {
		var ribbons = [];
		var i = 1;
		if ("sale" in this.props.item) {
			ribbons.push({ id: i, type: "sale" });
			i++;
		}
		if ("new" in this.props.item)
			ribbons.push({ id: i, type: "new" });


		var price;
		if ("oldPrice" in this.props.item) {
			price = <Paragraph className="price"><del>{this.props.item.oldPrice}</del> {this.props.item.price}€</Paragraph>;
		}
		else {
			price = <Paragraph className="price">{this.props.item.price}€</Paragraph>;
		}


		return (
			<div className="item">
				<div className="product">
					<div className="flip-container">
						<div className="flipper">
							<div className="front">
								<Link href={this.props.itemhref}>
									<Image src={this.props.item.src_front} alt={this.props.item.name} className="img-responsive"/>
                                </Link>
                            </div>
							<div className="back">
								<Link href={this.props.item.href}>
									<Image src={this.props.item.src_back} alt={this.props.item.name} className="img-responsive"/>
								</Link>
							</div>
						</div>
					</div>
					<Link href={this.props.item.href} class="invisible">
						<Image src={this.props.item.src_front} alt={this.props.item.name} className="img-responsive"/>
                    </Link>
					<div className="text">
						<TitleH3>
							<Link href={this.props.item.href}>
								{this.props.item.name}
							</Link>
						</TitleH3>
						{price}
					</div>
					{ribbons.map((item) => 
						<Ribbon key={item.id} type={item.type}/>
					)}
				</div>
			</div>
		);
	}
}