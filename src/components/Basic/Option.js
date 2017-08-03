import React from 'react';

import Form from '../Basic/Form';
import Link from '../Basic/Link';
import Select from '../Form/Select';
import Col from '../Basic/Col';

export default class Option extends React.Component {
	constructor(props) {
		super(props);
		this.colClass1 = [{ type: "sm", size: 12 },
			{ type: "md", size: 4 }];
		this.colClass2 = [{ type: "sm", size: 12 },
			{ type: "md", size: 8 }];
		this.colClass3 = [{ type: "md", size: 6 },
		{ type: "sd", size: 6 }];
	}

	render() {
		return (
			<div className="box info-bar">
				<div className="row">
					<Col args={this.colClass1} className="products-showing">
						<strong>{this.props.itemPerPage}</strong>
						&nbsp;sur&nbsp;
						<strong>{this.props.totalItem}</strong>
						&nbsp;articles affichés
					</Col>
					<Col args={this.colClass2} className="products-number-sort">
						<div className="row">
							<Form className="form-inline">
								<Col args={this.colClass3}>
									<div className="products-number">
										<strong>Afficher</strong>
										{this.props.pageValue.map((val) =>
											<Link key={val.id} href="#" className={val.className} >
												{val.value}
											</Link>
										)}
										&nbsp;articles
									</div>
								</Col>
								<Col args={this.colClass3}>
									<div className="products-sort-by">
										<strong>Trier par</strong>
										<Select name="sort-by" className="form-control" list={this.props.selectOptions}/>
									</div>
								</Col>
							</Form>
						</div>
					</Col>
				</div>
			</div>
		);
	}
}