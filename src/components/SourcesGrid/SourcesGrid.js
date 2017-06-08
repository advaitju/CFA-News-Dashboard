import React, { Component } from 'react';
import Source from './Source/Source';

import './SourcesGrid.css';

class SourcesGrid extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<p>SourcesGrid</p>
				<Source />
			</div>
		);
	}
}

export default SourcesGrid;
