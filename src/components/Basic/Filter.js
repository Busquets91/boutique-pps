import React from 'react';

import TitleH3 from '../Basic/TitleH3';
import Link from '../Basic/Link';
import Icon from '../Basic/Icon';
import Form from '../Basic/Form';
import FormGroup from '../Form/FormGroup';
import CheckBox from '../Form/CheckBox';
import Button from '../Basic/Button';

export default class Filter extends React.Component {
	render() {
		return (
			<div>
				{this.props.filters.map((item) =>
					<div className="panel panel-default sidebar-menu" key={item.id}>
						<div className="panel-heading">
							<TitleH3 className="panel-title">
								{item.title}
								<Link className="btn btn-xs btn-danger pull-right" href="#">
									<Icon className="fa fa-times-circle"/>
									Réinit
								</Link>
							</TitleH3>
						</div>
						<div className="panel-body">
							<Form>
								<FormGroup>
									{item.values.map((val) =>
										<CheckBox key={val.id}>
											{val.title}
										</CheckBox>
									)}
									<Button className="btn btn-default btn-sm btn-primary">
										<Icon className="fa fa-pencil" />
										Appliquer
									</Button>
								</FormGroup>
							</Form>
						</div>
					</div>
				)}
			</div>
		);
	}
}