import React from 'react';

export default class List extends React.Component {

	render() {
		return (
			<ul className={this.props.className} >
				{this.props.list.map((item) =>
					<li className={item.className} key={item.id}>
						{item.object}
					</li>
				)}
			</ul>
		);
	}
}