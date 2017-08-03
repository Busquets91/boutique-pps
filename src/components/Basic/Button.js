import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

/**
 * General description:
 * Button is an html button element
 */
export default class Button extends React.Component {	
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		/**
		 * We do this because react dont accept this attribute for a button
		 * so we add them as customised attribute
		 */
		var elm = ReactDOM.findDOMNode(this.refs.custom);

		if ("dataDismiss" in this.props)
			elm.setAttribute('data-dismiss', this.props.dataDismiss);
		if ("dataToggle" in this.props)
			elm.setAttribute('data-toggle', this.props.dataToggle);
		if ("dataTarget" in this.props)
			elm.setAttribute('data-target', this.props.dataTarget);
		if ("ariaHidden" in this.props)
			elm.setAttribute('aria-hidden', this.props.ariaHidden);
	}

	render() {
		return (
			<button ref="custom" type={this.props.type} className={this.props.className} id={this.props.id} >
				{this.props.children}
            </button>
		);
	}
}

Button.propTypes = {
	/**
	* id: id of the Button
	*/
	id: PropTypes.string,
	/**
	* dataDismiss: allow you to hide 
	*/
	dataDismiss: PropTypes.string,
	/**
	* dataTarget: id of the target of the Button
	*/
	dataTarget: PropTypes.string,
	/**
	* dataToggle: event type attach to the Button
	*/
	dataToggle: PropTypes.string,
	/**
	* ariaHidden: if the element must be hide
	*/
	ariaHidden: PropTypes.string,
	/**
	* type: type of the Button
	*/
	type: PropTypes.string,
	/**
	* className: class of the Button
	*/
	className: PropTypes.string
}