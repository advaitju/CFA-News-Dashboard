import React, { Component } from 'react';
import Article from './Article/Article';

class ArticlesGrid extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<p>ArticlesGrid</p>
				<Article />
			</div>
		);
	}
}

export default ArticlesGrid;
