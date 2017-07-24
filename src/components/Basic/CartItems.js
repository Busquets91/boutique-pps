import React from 'react';

import CartItem from '../Basic/CartItem';

export default class CartItems extends React.Component {
	render() {
		return (
			<div className={this.props.className}>
				<table className={this.props.tableClassName}>
					<thead>
						<tr>
						{this.props.listHeader.map((head) =>
							<th key={head.id} className={head.className} colSpan={head.colspan}>{head.value}</th>
						)}
						</tr>
					</thead>
					<tbody>
						{this.props.listItem.map((item) =>
							<CartItem key={item.id} href={item.href} imageSrc={item.imageSrc} imageAlt={item.imageAlt} name={item.name} quantity={item.quantity} price={item.price} sale={item.sale} finalPrice={item.finalPrice} />
						)}
					</tbody>
					<tfoot>
						<tr>
							{this.props.listFooter.map((foot) =>
								<th key={foot.id} className={foot.className} colSpan={foot.colspan}>{foot.value}</th>
							)}
						</tr>
						</tfoot>
				</table>
			</div>
		);
	}
}