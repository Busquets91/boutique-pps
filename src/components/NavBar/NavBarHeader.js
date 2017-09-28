import React from 'react';

import Link from '../Basic/Link';
import Image from '../Basic/Image';
import ScreenReader from '../Basic/ScreenReader';
import NavBarButton from '../NavBar/NavBarButton';
import Button from '../Basic/Button';
import Icon from '../Basic/Icon';
import Hidden from '../Basic/Hidden';

/**
 * General description:
 * NavBarHeader is specific component that represent the header of the navbar
 */
export default class NavBarHeader extends React.Component {
	constructor(props) {
		super(props);
		this.hiddenType = ["sm"];
	}

	render() {
		return (
			<div>
				<Link className="navbar-brand home" href="/">
					<Image src="/img/logo.png" alt="PPS logo" className="hidden-xs" />
					<Image src="/img/logo-small.png" alt="PPS logo" className="visible-xs" />
					<ScreenReader text="La Boutique - Accueil"/>
				</Link>
				<NavBarButton>
					<Button type="button" className="navbar-toggle" dataToggle="collapse" dataTarget="#navigation">
						<ScreenReader text="Toggle navigation"/>
						<Icon className="fa fa-align-justify" />
					</Button>
					<Button type="button" className="navbar-toggle" dataToggle="collapse" dataTarget="#search">
						<ScreenReader text="Toggle search" />
						<Icon className="fa fa-search" />
					</Button>
					<Link className="btn btn-default navbar-toggle" href="/card">
						<Icon className="fa fa-shopping-cart" />
						<Hidden types={this.hiddenType}>
							2 articles
						</Hidden>
					</Link>
				</NavBarButton>
			</div>
		);
	}
}