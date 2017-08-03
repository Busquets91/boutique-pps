import React from 'react';

import Title from '../Basic/Title';
import Paragraph from '../Basic/Paragraph';
import FormGroup from '../Form/FormGroup';
import Input from '../Basic/Input';
import Button from '../Basic/Button';
import Icon from '../Basic/Icon';
import Form from '../Basic/Form';
import Link from '../Basic/Link';

export default class RegisterBlock extends React.Component {
	render() {
		return (
			<div className="box">
				<Title level={1}>
					Nouveau compte
				</Title>
				<Paragraph className="lead">
					Pas encore inscrit?
				</Paragraph>
				<Paragraph>
					En vous inscrivant sur le site de la Boutique de Paris-Sud vous accéder à touts les produits dérivées de votre école préféré. Profitez de réduction en adhérant au BIPS!
				</Paragraph>
				<Paragraph className="text-muted">
					Pour plus d'informations, <Link href="#">contactez nous</Link>, nos respos boutique se feront un plaisir de vous répondre dans les plus brefs délais.
				</Paragraph>
				<hr />
				<Form action="#">
					<FormGroup>
						<label htmlFor="name">Nom</label>
						<Input type="text" className="form-control" id="name" />
					</FormGroup>
					<FormGroup>
						<label htmlFor="email">Email</label>
						<Input type="text" className="form-control" id="email" />
					</FormGroup>
					<FormGroup>
						<label htmlFor="password">Nom</label>
						<Input type="password" className="form-control" id="password" />
					</FormGroup>
					<div className="text-center">
						<Button type="submit" className="btn btn-primary">
							<Icon className="fa fa-user-md" />
							S'inscrire
						</Button>
					</div>
				</Form>
			</div>
		);
	}
}