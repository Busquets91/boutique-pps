import React from 'react';

import Paragraph from '../Basic/Paragraph';

export default class Quote extends React.Component {

	render() {
		return (
			<blockquote>
				<Paragraph>
					<em>{this.props.children}</em>
				</Paragraph>
			</blockquote>
	);
	}
}