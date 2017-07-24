import React from 'react';

import NavBar from './NavBar/Navbar';
import Copyright from './Basic/Copyright';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Shop from './Pages/Shop';
import Detail from './Pages/Detail';
import Cart from './Pages/Cart';
import { BrowserRouter as Router, Route} from 'react-router-dom';


export default class Layout extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<NavBar />
					<div id="all">
						<Route exact={true} path="/" component={Home} />
						<Route path="/register" component={Register} />
						<Route path="/shop" component={Shop} />
						<Route path="/item/:id" component={Detail} />
						<Route path="/cart" component={Cart} />
						<Copyright team="© 2017 APP de l'ambiance">
							Site réalisé par Alexis Pointurier et Maxime Dufour
						</Copyright>
					</div>
				</div>
			</Router>
		);
	}
}