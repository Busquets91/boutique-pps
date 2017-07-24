import React from 'react';

import TitleH1 from '../Basic/TitleH1';
import Paragraph from '../Basic/Paragraph';
import FormGroup from '../Form/FormGroup';
import Input from '../Basic/Input';
import Button from '../Basic/Button';
import Icon from '../Basic/Icon';
import Form from '../Basic/Form';

export default class RegisterBlock extends React.Component {
	render() {
		return (
			<div className="box">
				<TitleH1>
					Connexion
				</TitleH1>
				<Paragraph className="lead">
					Déja inscrit ?
				</Paragraph>
				<Paragraph className="text-muted">
					Connectez vous dés maintenant a l'aide de vos identifiants afin de profitez des derniers articles de la Boutique !
				</Paragraph>
				<hr />
				<Form action="#">
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
							<Icon className="fa fa-sign-in" />
							Se connecter
						</Button>
					</div>
				</Form>
			</div>
		);
	}
}