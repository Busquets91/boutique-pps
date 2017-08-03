import React from 'react';
import PropTypes from 'prop-types';

import Title from '../Basic/Title';
import Link from '../Basic/Link';
import Icon from '../Basic/Icon';
import Form from '../Basic/Form';
import FormGroup from '../Form/FormGroup';
import CheckBox from '../Form/CheckBox';
import Button from '../Basic/Button';


/**
 * General description:
 * Filter represent one filter block with a title and different option
 */
export default class Filter extends React.Component {
	render() {
		return (
					<div className="panel panel-default sidebar-menu" key={this.props.filter.id}>
						<div className="panel-heading">
							<Title level={3} className="panel-title">
								{this.props.filter.title}
								<Link className="btn btn-xs btn-danger pull-right" href="#">
									<Icon className="fa fa-times-circle"/>
									Réinit
								</Link>
							</Title>
						</div>
						<div className="panel-body">
							<Form>
								<FormGroup>
									{this.props.filter.values.map((val) =>
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
		);
	}
}

Filter.propTypes = {
	/**
	* filter: represent a filter
	*	id: key
	*	title: title of the filter
	*	values: array of all value that are allowed
	*/
	filter: PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string,
		values: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number,
			title: PropTypes.string
		}))
	})
}