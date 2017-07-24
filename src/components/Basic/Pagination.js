import React from 'react';

import Paragraph from '../Basic/Paragraph';
import Icon from '../Basic/Icon';
import Link from '../Basic/Link';
import List from '../Basic/List';

export default class Pagination extends React.Component {
	render() {
		const listPages = [];
		for (var i = 1; i <= this.props.nbPages; i++) {
			if (i === this.props.activePage)
				listPages.push({ id: i, className: "active", object: <Link href="#">{ i }</Link> });
			else
				listPages.push({ id: i, object: <Link href="#">{i}</Link> });
		}
		listPages.push({ id: i, object: <Link href="#">&raquo;</Link> });
		return (
			<div className="pages">
				<Paragraph className="loadMore">
					<Link href="#" className="btn btn-primary btn-lg">
						<Icon className="fa fa-chevron-down" />
						Plus d'articles
					</Link>
				</Paragraph>

				<List className="pagination" list={listPages}/>
			</div>
		);
	}
}