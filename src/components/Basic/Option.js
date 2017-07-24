import React from 'react';

import Form from '../Basic/Form';
import Link from '../Basic/Link';
import Select from '../Form/Select';

export default class Option extends React.Component {
	render() {
		return (
			<div className="box info-bar">
				<div className="row">
					<div className="col-sm-12 col-md-4 products-showing">
						<strong>{this.props.itemPerPage}</strong>
						&nbsp;sur&nbsp;
						<strong>{this.props.totalItem}</strong>
						&nbsp;articles affichés
					</div>
					<div className="col-sm-12 col-md-8  products-number-sort">
						<div className="row">
							<Form className="form-inline">
								<div className="col-md-6 col-sm-6">
									<div className="products-number">
										<strong>Afficher</strong>
										{this.props.pageValue.map((val) =>
											<Link key={val.id} href="#" className={val.className} >
												{val.value}
											</Link>
										)}
										&nbsp;articles
									</div>
								</div>
								<div className="col-md-6 col-sm-6">
									<div className="products-sort-by">
										<strong>Trier par</strong>
										<Select name="sort-by" className="form-control" list={this.props.selectOptions}/>
									</div>
								</div>
							</Form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}