import React from 'react';

import ModalLogin from '../Modal/ModalLogin';
import Container from '../Basic/Container';
import NavBarHeader from '../NavBar/NavBarHeader';
import NavBarButton from '../NavBar/NavBarButton';
import NavBarMenu from '../NavBar/NavBarMenu';
import List from '../Basic/List';
import Link from '../Basic/Link';
import Icon from '../Basic/Icon';
import Button from '../Basic/Button';
import HiddenSM from '../Basic/HiddenSM';
import OnlySR from '../Basic/OnlySR';
import SearchComponent from '../NavBar/SearchComponent';


export default class NavBar extends React.Component {
	render() {
		const itemMenu = [
			{ id: 1, className:"active" , object: <Link href="/" className="active">Accueil</Link> },
			{ id: 2, object: <Link href="/shop">Catalogue</Link> },
			{ id: 3, object: <Link href="/info">Infos</Link> },
			{ id: 4, object: <Link href="#" dataToggle="modal" dataTarget="#login-modal">Connexion</Link> },
			{ id: 5, object: <Link href="/register">Inscription</Link> }
		];

		return (
			<div className="navbar navbar-default yamm" role="navigation" id="navbar">
				<ModalLogin />
				<Container>
					<NavBarHeader/>
					<NavBarMenu>
						<List className="nav navbar-nav navbar-left" list={itemMenu} />
					</NavBarMenu>
					<NavBarButton>
						<div className="navbar-collapse collapse right" id="basket-overview">
							<Link href="/cart" className="btn btn-primary navbar-btn">
								<Icon className="fa fa-shopping-cart" />
								<HiddenSM>
									2 articles
								</HiddenSM>
							</Link>
						</div>
						<div className="navbar-collapse collapse right" id="search-not-mobile">
							<Button type="button" className="btn navbar-btn btn-primary" data-toggle="collapse" data-target="#search">
								<OnlySR>
									Toggle search
								</OnlySR>
								<Icon className="fa fa-search"/>
							</Button>
						</div>
					</NavBarButton>
					<SearchComponent/>
				</Container>
			</div>
            );
	}
}