import React from 'react';

import Col from '../Basic/Col';
import List from '../Basic/List';


export default class Tree extends React.Component {
	render() {
		return (
			<Col type="md" size="12">
				<List className="breadcrumb" list={this.props.path}/>
			</Col>
		);
	}
}