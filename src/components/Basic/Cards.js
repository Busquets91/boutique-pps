import React from 'react';

import Container from '../Basic/Container';
import Col from '../Basic/Col';
import Icon from '../Basic/Icon';
import TitleH3 from '../Basic/TitleH3';
import Link from '../Basic/Link';
import Paragraph from '../Basic/Paragraph';

export default class Cards extends React.Component {
	render() {
		const sizeCol = 12 / this.props.listCard.length;
		return (
			<div id="advantages">
				<Container>
					<div className="same-height-row">
						{this.props.listCard.map((item) =>
							<Col type="sm" size={sizeCol} key={item.id}>
								<div className="box same-height clickable">
									<div className="icon">
										<Icon className={item.icon}/>
									</div>
									<TitleH3>
										<Link href={item.href}>
											{item.title}
										</Link>
									</TitleH3>
									<Paragraph>
										{item.text}
									</Paragraph>
								</div>
							</Col>
						)}
					</div>
				</Container>	
			</div>
		);
	}
}