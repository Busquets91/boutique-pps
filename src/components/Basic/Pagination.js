import React from 'react';


import Paragraph from '../Basic/Paragraph';
import Icon from '../Basic/Icon';
import Link from '../Basic/Link';
import List from '../Basic/List';

export default class Pagination extends React.Component {
	constructor(props) {
		super(props);

		this.listPages = [];
		for (var i = 1; i <= this.props.nbPages; i++) {
			if (i === this.props.activePage) {
				this.listPages.push({ id: i, className: "active", object: <Link href="#">{i}</Link> });
			}
			else {
				this.listPages.push({ id: i, object: <Link href="#">{i}</Link> });
			}
		}
		this.listPages.push({ id: i, object: <Link href="#">&raquo;</Link> });
	}

	render() {
		return (
			<div className="pages">
				<Paragraph className="loadMore">
					<Link href="#" className="btn btn-primary btn-lg">
						<Icon className="fa fa-chevron-down" />
						Plus d'articles
					</Link>
				</Paragraph>
				<List className="pagination" list={this.listPages}/>
			</div>
		);
	}
}