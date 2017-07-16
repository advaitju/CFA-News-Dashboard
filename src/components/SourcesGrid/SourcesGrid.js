import React, { Component } from 'react';
import Source from './Source/Source';

class SourcesGrid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sourcesDisplay: true
		}
		this.sourcesDisplayToggle = this.sourcesDisplayToggle.bind(this);
	}

	sourcesDisplayToggle(e) {
		e.preventDefault();
		this.setState(prevState => ({
			sourcesDisplay: !prevState.sourcesDisplay
		}));
	}

	render() {
		return (
			<div>
				<p>SourcesGrid</p>
				<Source />
				<a href="#" onClick={this.sourcesDisplayToggle} className={`sources-toggle ${this.state.sourcesDisplay ? '__hide-sources' : ''}`}>{this.state.sourcesDisplay ? 'Hide' : 'Show'} Sources</a>
			</div>
		);
	}
}

export default SourcesGrid;
