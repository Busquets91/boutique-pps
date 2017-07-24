import React from 'react';

import Item from '../Basic/Item';

export default class Catalog extends React.Component {
	render() {
		return (
			<div className="row products">
				{this.props.listItem.map((item) =>
					<Item key={item.id} item={item} className="col-md-4 col-sm-6" haveBtn={true}/>
				)}
			</div>
		);
	}
}