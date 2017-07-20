import React from 'react';

import Form from '../Basic/Form';
import InputGroup from '../Form/InputGroup';
import Input from '../Basic/Input';
import SpanInputGroup from '../Form/SpanInputGroup';
import Button from '../Basic/Button';
import Icon from '../Basic/Icon';

export default class SearchComponent extends React.Component {
	render() {
		return (
			<div className="clearfix collapse in" id="search" style={{ height: 'auto' }}>
				<Form className="navbar-form" role="search">
					<InputGroup>
						<Input type="text" className="form-control" placeholder="Rechercher" />
						<SpanInputGroup>
							<Button type="submit" className="btn btn-primary">
								<Icon className="fa fa-search" />
							</Button>
						</SpanInputGroup>
					</InputGroup>
				</Form>
			</div>
		);
	}
}