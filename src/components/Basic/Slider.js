import React from 'react';
import PropTypes from 'prop-types';

import Image from '../Basic/Image';

/**
 * General description:
 * Slider is an element that display image into a Slider element
 */
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

Slider.propTypes = {
	/**
	* listImg: Array of img
	* id is the key
	* src is the path of the image
	* alt is the alt of the image
	*/
	listImg: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		src: PropTypes.string,
		alt: PropTypes.string
	}))
}