import React from 'react';

import Form from '../Basic/Form';
import FormGroup from '../Form/FormGroup';
import Link from '../Basic/Link';
import Paragraph from '../Basic/Paragraph';
import Button from '../Basic/Button';
import Input from '../Basic/Input';
import Icon from '../Basic/Icon';


export default class ModalBody extends React.Component {
	render() {
		const actionForm = "customer-orders.html";
		const pClass = "text-center text-muted";
		const classBtn = "btn btn-primary";

		return (
			<div className="modal-body">
				<Form action={actionForm}>
					<FormGroup>
						<Input type="text" className="form-control" id="email-modal" placeholder="Email" />
					</FormGroup>
					<FormGroup>
						<Input type="password" className="form-control" id="password-modal" placeholder="Mot de passe" />
					</FormGroup>
					<Paragraph className="text-center">
						<Button className={classBtn}>
							<Icon className="fa fa-sign-in" txt=" Connexion" />
							Connexion
						</Button>
					</Paragraph>
				</Form>
				<Paragraph className={pClass}>
					Pas encore inscrit?
				</Paragraph>
				<Paragraph className={pClass}>
					<Link href="/register">
						<strong>S'inscrire! </strong>
					</Link>
					 C'est facile et cela vous donnes accés à toutes les fonctionnalités de la Boutique !
				</Paragraph>
			</div>
		);
	}
}