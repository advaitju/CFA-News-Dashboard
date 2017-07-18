import React, { Component } from 'react';

class Source extends Component {
	constructor(props) {
		super(props);
		this.handleToggle = this.handleToggle.bind(this);
	}

	handleToggle() {
		this.props.onToggle(this.props.sourceId);
	}

	render() {
		return (
			<div className={`_source ${this.props.selected ? 'selected' : ''}`} onClick={this.handleToggle}>
				<img className="_source-image" src={this.props.sourceImg} />
				<h5 className="_source-name">{this.props.sourceName}</h5>
			</div>
		);
	}
}

export default Source;
