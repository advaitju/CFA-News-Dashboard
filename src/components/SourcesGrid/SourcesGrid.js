import React, { Component } from 'react';
import Source from './Source/Source';
import Category from './Category/Category';

class SourcesGrid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sourcesDisplay: false
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
		const categories = this.props.categories.map((category, index) =>
			<Category key={index} selected={category.show} categoryId={category.id} categoryName={category.id.charAt(0).toUpperCase() + category.id.replace(/-/g, ' ').slice(1)} onToggle={this.props.categoryToggle} />
		);
		const sources = this.props.sources.map((source, index) =>
			<Source key={index} selected={source.show} sourceImg={source.icon} sourceId={source.id} sourceName={source.name} onToggle={this.props.sourcesToggle} />
		);
		return (
			<div className="row">
				<div className="col-sm-12">

					<div className="sources-grid">
						<div className="row">
							{categories}
						</div>
						<br />

						<div className={`row ${this.state.sourcesDisplay ? '' : 'hide'}`}>
							{sources}
						</div>
					</div>

					<a href="" onClick={this.sourcesDisplayToggle} className={`sources-toggle ${this.state.sourcesDisplay ? '__hide-sources' : ''}`}>{this.state.sourcesDisplay ? 'Hide' : 'Show'} Sources</a>

				</div>
			</div>
		);
	}
}

export default SourcesGrid;
