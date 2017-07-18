import React, { Component } from 'react';
import Article from './Article/Article';

class NewsGrid extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const articles = this.props.articles.map((list) => {
			return list.articles.map((article, index) =>
				<div className="col-sm-6 col-md-4 col-lg-3">
					<Article key={index} url={article.url} img={article.urlToImage} title={article.title} author={list.source.charAt(0).toUpperCase() + list.source.replace(/-/g, ' ').slice(1)} published={article.publishedAt.slice(0,9)} snippet={article.description.substring(0, 100) + '...'} />
				</div>
			);
		});
		return (
			<div className="row news-grid">
				<div className="news-grid">
					{articles}
				</div>
			</div>
		);
	}
}

export default NewsGrid;
