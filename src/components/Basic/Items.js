import React from 'react';

import Container from '../Basic/Container';
import Col from '../Basic/Col';
import TitleH2 from '../Basic/TitleH2';
import Item from '../Basic/Item';

export default class Items extends React.Component {
	render() {
		return (
			<div id="hot">
				<div className="box">
					<Container>
						<Col type="md" size="12">
							<TitleH2>
								Nouveautés
							</TitleH2>
						</Col>
					</Container>
				</div>
				<Container>
					<div className="product-slider">
						{this.props.listItem.map((item) =>
							<Item key={item.id} item={item}/>
						)}
					</div>
				</Container>
			</div>
		);
	}
}