import React from 'react';

import Input from '../Basic/Input';

export default class CheckBox extends React.Component {
	render() {
		return (
			<div className="checkbox">
				<label>
					<Input type="checkbox" />{this.props.children}
				</label>
			</div>
					);
	}
}