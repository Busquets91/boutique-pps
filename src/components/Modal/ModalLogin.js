import React from 'react';

import ModalHeader from '../Modal/ModalHeader';
import ModalBody from '../Modal/ModalBody';

export default class ModalLogin extends React.Component {
	render() {
		return (
			<div className="modal fade" id="login-modal" tabIndex="-1" role="dialog" aria-label="Login" aria-hidden="true">
				<div className="modal-dialog modal-sm">
					<div className="modal-content">
						<ModalHeader />
                        <ModalBody />
				    </div>
			    </div>
		    </div>
            );
	}
}