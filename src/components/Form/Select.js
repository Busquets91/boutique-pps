import React from 'react';

export default class Select extends React.Component {
	render() {
		return (
			<select className={this.props.className} name={this.props.name} >
				{this.props.list.map((item) =>
					<option className={item.className} key={item.id}>
						{item.object}
					</option>
				)}
			</select>
		);
	}
}