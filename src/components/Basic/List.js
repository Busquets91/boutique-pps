import React from 'react';
import Link from '../Basic/Link';

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