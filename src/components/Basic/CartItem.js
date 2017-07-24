import React from 'react';

import Image from '../Basic/Image';
import Input from '../Basic/Input';
import Link from '../Basic/Link';
import I from '../Basic/I';

export default class CartItem extends React.Component {
	render() {
		return (
			<tr className={this.props.className} id={this.props.id} key={"cartItem" + this.props.id}>
				<td><Link href={this.props.href}><Image src={this.props.imageSrc} alt={this.props.imageAlt} /></Link></td>
				<td><Link href={this.props.href}>{this.props.name}</Link></td>
				<td><Input type="number" defaultValue={this.props.quantity} className="form-control" /></td>
				<td>{this.props.price}</td>
				<td>{this.props.sale}</td>
				<td>{this.props.finalPrice}</td>
				<td><Link href="#"><I className="fa fa-trash-o"></I></Link></td>
			</tr>
		);
	}
}