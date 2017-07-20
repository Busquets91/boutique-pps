import React from 'react';

import Image from '../Basic/Image';

export default class Slider extends React.Component {
	render() {
		return (
			<div id="main-slider">
				{this.props.listImg.map((item) =>
					<div className="item" key={item.id}>
						<Image src={item.src} alt={item.alt} className="img-responsive"/>
                    </div>
				)}
			</div>
		);
	}
}