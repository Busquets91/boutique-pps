import React from 'react';

import Form from '../Basic/Form';
import InputGroup from '../Form/InputGroup';
import Input from '../Basic/Input';
import SpanInputGroup from '../Form/SpanInputGroup';
import Button from '../Basic/Button';
import Icon from '../Basic/Icon';

/**
 * General description:
 * SearchComponent is a specific component that redner a bar to do a search
 */
export default class SearchComponent extends React.Component {
	render() {
		return (
			<div className="clearfix collapse" id="search" >
				<Form className="navbar-form" role="search">
					<InputGroup>
						<Input type="text" className="form-control" placeholder="Rechercher" />
						<SpanInputGroup>
							<Button type="submit" className="btn btn-primary" dataToggle="collapse" dataTarget="#search">
								<Icon className="fa fa-search" />
							</Button>
						</SpanInputGroup>
					</InputGroup>
				</Form>
			</div>
		);
	}
}