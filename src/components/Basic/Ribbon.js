import React from 'react';

export default class TitleH3 extends React.Component {
	render() {
		const nameClass = "ribbon " + this.props.type;
		var txt = "";
		if (this.props.type === "sale")
			txt = "NEW";
		if (this.props.type === "new")
			txt = "PROMO";
		return (
			<div className={nameClass}>
				<div className="theribbon">{txt}</div>
				<div className="ribbon-background"></div>
			</div>
		);
	}
}