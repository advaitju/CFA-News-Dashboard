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
				<img className="_source-image" src="https://icons.better-idea.org/icon?url=http://arstechnica.com&size=70..120..200" />
				<h4 className="_source-name">{this.props.sourceName}</h4>
			</div>
		);
	}
}

export default Source;
