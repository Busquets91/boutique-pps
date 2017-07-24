import React from 'react';

import SummaryItem from '../Basic/SummaryItem';

export default class SummaryItems extends React.Component {
	render() {
		return (
			<div className={this.props.className}>
				<table className={this.props.tableClassName}>
					<tbody>
						{this.props.listItem.map((item) =>
							<SummaryItem key={item.id} value={item.value} header={item.header} className={item.className} />
						)}
					</tbody>
				</table>
			</div>
		);
	}
}