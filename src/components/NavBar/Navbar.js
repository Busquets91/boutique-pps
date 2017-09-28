import React from 'react';
import PropTypes from 'prop-types';

import ModalLogin from '../Modal/ModalLogin';
import Container from '../Basic/Container';
import NavBarHeader from '../NavBar/NavBarHeader';
import NavBarButton from '../NavBar/NavBarButton';
import NavBarMenu from '../NavBar/NavBarMenu';
import List from '../Basic/List';
import Link from '../Basic/Link';
import Icon from '../Basic/Icon';
import Button from '../Basic/Button';
import Hidden from '../Basic/Hidden';
import OnlySR from '../Basic/OnlySR';
import SearchComponent from '../NavBar/SearchComponent';

/**
 * General description:
 * NavBar is a component that render a Navbar with a given list of link
 */
export default class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.hiddenType = ["sm"];
	}

	render() {
		return (
			<div className="navbar navbar-default yamm" role="navigation" id="navbar">
				<ModalLogin />
				<Container>
					<NavBarHeader/>
					<NavBarMenu>
						<List className="nav navbar-nav navbar-left" list={this.props.itemMenu} />
					</NavBarMenu>
					<NavBarButton>
						<div className="navbar-collapse collapse right" id="basket-overview">
							<Link href="/cart" className="btn btn-primary navbar-btn">
								<Icon className="fa fa-shopping-cart" />
								<Hidden types={this.hiddenType}>
									2 articles
								</Hidden>
							</Link>
						</div>
						<div className="navbar-collapse collapse right" id="search-not-mobile">
							<Button type="button" className="btn navbar-btn btn-primary" dataToggle="collapse" dataTarget="#search">
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

NavBar.propTypes = {
	/**
	* lisItem: list of item that are part of the nav
	* id is the key
	* object is the item
	* className is the class
	*/
	maint: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		object: PropTypes.string,
		className: PropTypes.string
	}))
}