import React from 'react';

import Button from '../Basic/Button';
import TitleH4 from '../Basic/TitleH4';

export default class ModalHeader extends React.Component {
	render() {
		const btnType = "button";
		const btnClass = "close";
		const btnData = "modal";
		const btnAria = "true";

		const hClass = "modal-title";
		const hId = "Login";
		return (
			<div className="modal-header">
				<Button type={btnType} className={btnClass} dataDismiss={btnData} ariaHidden={btnAria}>
					&times;
				</Button>
				<TitleH4 className={hClass} id={hId}>
					Connexion
				</TitleH4>
			</div>
					);
	}
}