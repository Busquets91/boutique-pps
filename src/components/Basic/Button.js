import React from 'react';
import ReactDOM from 'react-dom';

export default class Button extends React.Component {	
	constructor(props) {
		super(props);
		this.state = {}
	}

	componentDidMount() {
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
			<button	ref="custom" type={this.props.type} className={this.props.className}>
				{this.props.children}
            </button>
		);
	}
}