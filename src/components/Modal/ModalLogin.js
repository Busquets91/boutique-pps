import React from 'react';

import Button from '../Basic/Button';
import Title from '../Basic/Title';
import Form from '../Basic/Form';
import FormGroup from '../Form/FormGroup';
import Input from '../Basic/Input';
import Paragraph from '../Basic/Paragraph';
import Link from '../Basic/Link';
import Icon from '../Basic/Icon';

/**
 * General description:
 * ModalLogin is a modal that render a login form
 */
export default class ModalLogin extends React.Component {
	render() {
		return (
			<div className="modal fade" id="login-modal" tabIndex="-1" role="dialog" aria-label="Login" aria-hidden="true">
				<div className="modal-dialog modal-sm">
					<div className="modal-content">
						<div className="modal-header">
							<Button type="button" className="close" dataDismiss="modal" ariaHidden="true">
								&times;
							</Button>
							<Title level={4} className="modal-title" id="Login">
								Connexion
							</Title>
						</div>
						<div className="modal-body">
							<Form action="#">
								<FormGroup>
									<Input type="text" className="form-control" id="email-modal" placeholder="Email" />
								</FormGroup>
								<FormGroup>
									<Input type="password" className="form-control" id="password-modal" placeholder="Mot de passe" />
								</FormGroup>
								<Paragraph className="text-center">
									<Button className="btn btn-primary">
										<Icon className="fa fa-sign-in" txt=" Connexion" />
										Connexion
									</Button>
								</Paragraph>
							</Form>
							<Paragraph className="text-center text-muted">
								Pas encore inscrit?
							</Paragraph>
							<Paragraph className="text-center text-muted">
								<Link href="/register">
									<strong>S'inscrire! </strong>
								</Link>
								C'est facile et cela vous donnes accés à toutes les fonctionnalités de la Boutique !
							</Paragraph>
						</div>
				    </div>
			    </div>
		    </div>
            );
	}
}