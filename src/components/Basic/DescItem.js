import React from 'react';

import Box from '../Basic/Box';
import TitleH4 from '../Basic/TitleH4';
import Paragraph from '../Basic/Paragraph';
import List from '../Basic/List';
import Quote from '../Basic/Quote';

export default class Descitem extends React.Component {
	render() {
		const entretien = [{ id: 1, object: "55% Cotton, 45% Polyester" },
			{ id: 2, object: "Laver à froid, seulement avec les couleurs" }];

		const taille = [{ id: 1, object: "Coupe regular" }];
		return (
			<Box id="details">
				<TitleH4>
					Description de l'article
				</TitleH4>
				<Paragraph>
					Un sweat-shirt confortable, passe-partout avec un tissu en étoffe supersoft, manches raglan, capuche avec cordons, icône à la poitrine gauche et garniture à nervures
				</Paragraph>
				<TitleH4>
					Matériaux et entretien
				</TitleH4>
				<List list={entretien}/>
				<TitleH4>
					Taille &Aacute; Coupe
				</TitleH4>
				<List list={taille} />
				<Quote>
					Great sweat shirt to wear on chilly summer nights. Very comfy too. Yes, I would recommend this product.
				</Quote>
			</Box>
		);
	}
}