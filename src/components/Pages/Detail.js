import React from 'react';

import Content from '../Basic/Content';
import Tree from '../Basic/Tree';
import Col from '../Basic/Col';
import DescItem from '../Basic/DescItem';
import ImageItem from '../Basic/ImageItem';
import Link from '../Basic/Link';
import Container from '../Basic/Container';



export default class Detail extends React.Component {
	render() {
		const path = [{ id: 1, object: <Link href="/">Accueil</Link> },
			{ id: 2, object: <Link href="/shop">Catalogue</Link> },
			{ id: 3, object: "Sweat PPS" }];
		return (
			<Content>
				<Container>
					<Tree path={path} />
					<Col type="md" size="12">
						<ImageItem />
						<DescItem />
					</Col>
				</Container>
			</Content>
		);
	}
}