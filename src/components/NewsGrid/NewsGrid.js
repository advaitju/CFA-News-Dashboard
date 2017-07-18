import React, { Component } from 'react';
import Article from './Article/Article';

class NewsGrid extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const articles = this.props.articles.map(list => {
			return list.articles.map((article, index) =>
				<div className={`col-sm-4 col-md-3 col-lg-2 ${article.show && list.show ? '' : 'hide'}`}>
					<Article key={index} url={article.url} img={article.urlToImage} title={article.title} author={list.source.charAt(0).toUpperCase() + list.source.replace(/-/g, ' ').slice(1)} published={article.publishedAt === !undefined ? article.publishedAt.slice(0,9) : '' } snippet={article.description.substring(0,150) + '[...continue]'} />
				</div>
			);
		});
		return (
			<div className="row">
				<div className="news-grid">
					{articles}
				</div>
			</div>
		);
	}
}

export default NewsGrid;
