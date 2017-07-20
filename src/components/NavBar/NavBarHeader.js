import React from 'react';

import Link from '../Basic/Link';
import Image from '../Basic/Image';
import ScreenReader from '../Basic/ScreenReader';
import NavBarButton from '../NavBar/NavBarButton';
import Button from '../Basic/Button';
import Icon from '../Basic/Icon';
import HiddenXS from '../Basic/HiddenXS';

export default class NavBarHeader extends React.Component {
	render() {
		return (
			<div>
				<Link className="navbar-brand home" href="/">
					<Image src="img/logo.png" alt="Obaju logo" className="hidden-xs" />
					<Image src="img/logo-small.png" alt="Obaju logo" className="visible-xs" />
					<ScreenReader text="La Boutique - Accueil"/>
				</Link>
				<NavBarButton>
					<Button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation">
						<ScreenReader text="Toggle navigation"/>
						<Icon className="fa fa-align-justify" />
					</Button>
					<Button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#search">
						<ScreenReader text="Toggle search" />
						<Icon className="fa fa-search" />
					</Button>
					<Link className="btn btn-default navbar-toggle" href="/card">
						<Icon className="fa fa-shopping-cart" />
						<HiddenXS>
							2 articles
						</HiddenXS>
					</Link>
				</NavBarButton>
			</div>
		);
	}
}