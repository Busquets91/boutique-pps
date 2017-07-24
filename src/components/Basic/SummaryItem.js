import React from 'react';

export default class SummaryItem extends React.Component {
	render() {
		return (
			<tr className={this.props.className} id={this.props.id} key={"summaryItem" + this.props.id}>
				<td>{this.props.value}</td>
				<th>{this.props.header}</th>
			</tr>
		);
	}
}